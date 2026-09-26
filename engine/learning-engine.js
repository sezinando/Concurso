/**
 * Learning Engine V1
 * Derives state, priority and next review from observed evidence.
 * No score is invented when evidence is absent.
 */
(function(global){
  "use strict";

  const STATES = {
    NONE:"NAO_INICIADO", STUDY:"EM_ESTUDO", STUDIED:"ESTUDADO",
    UNSTABLE:"INSTAVEL", REVIEW:"REVISAO", MASTERED:"CONSOLIDADO",
    TRANSFER:"TRANSFERENCIA_NAO_COMPROVADA"
  };

  const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,n));
  const mean=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
  const now=()=>new Date();

  function unitResults(unitId, results){
    return (results||[]).filter(r=>r.unitId===unitId);
  }

  function deriveUnitState(unit, results, events){
    const rs=unitResults(unit.id,results);
    const ev=(events||[]).filter(e=>e.unitId===unit.id);
    if(!rs.length && !ev.length) return STATES.NONE;
    if(!rs.length) return STATES.STUDY;

    const last=rs[rs.length-1];
    const accuracy=mean(rs.map(r=>r.isCorrect?1:0));
    const delayed=rs.filter(r=>r.isRetest===true);
    const transfer=rs.filter(r=>r.isTransfer===true);
    const transferAccuracy=mean(transfer.map(r=>r.isCorrect?1:0));

    if(transfer.length && transferAccuracy!==null && transferAccuracy<0.7)
      return STATES.TRANSFER;
    if(delayed.length){
      const ret=mean(delayed.map(r=>r.isCorrect?1:0));
      if(ret>=0.8 && accuracy>=0.8 && rs.filter(r=>r.isCorrect).length>=2) return STATES.MASTERED;
      if(ret<0.8) return STATES.REVIEW;
    }
    if(accuracy<0.7 || rs.some(r=>!r.isCorrect)) return STATES.UNSTABLE;
    return STATES.STUDIED;
  }

  function retention(results){
    const r=(results||[]).filter(x=>x.isRetest===true);
    return mean(r.map(x=>x.isCorrect?1:0));
  }

  function domain(results){
    const by={};
    (results||[]).forEach(r=>{if(!r.unitId)return;(by[r.unitId]??=[]).push(r);});
    const vals=Object.values(by).map(rs=>deriveUnitState({id:rs[0].unitId},rs,[]))
      .map(s=>s===STATES.MASTERED?1:0);
    return vals.length?mean(vals):null;
  }

  function priority(unit, results, referenceDate=new Date()){
    const rs=unitResults(unit.id,results);
    const state=deriveUnitState(unit,rs,[]);
    const last=rs.length?new Date(rs[rs.length-1].timestamp):null;
    const overdue=unit.nextReviewAt && new Date(unit.nextReviewAt)<=referenceDate;
    const errors=rs.filter(r=>!r.isCorrect).length;
    const recurring=Math.max(0,errors-1);
    const ret=retention(rs);
    const conf=mean(rs.filter(r=>r.confidence!=null).map(r=>(6-r.confidence)/5));
    let score=0;
    const reasons=[];
    if(overdue){score+=40;reasons.push("RETESTE_VENCIDO");}
    if(recurring){score+=Math.min(25,recurring*8);reasons.push("ERRO_RECENTE/RECORRENTE");}
    if(ret!==null){score+=(1-ret)*25;if(ret<0.8)reasons.push("BAIXA_RETENCAO");}
    if(conf!==null){score+=conf*15;if(conf>0.4)reasons.push("CONFIANCA_BAIXA");}
    if(state===STATES.TRANSFER){score+=18;reasons.push("TRANSFERENCIA_NAO_COMPROVADA");}
    if(state===STATES.UNSTABLE || state===STATES.REVIEW){score+=15;reasons.push("ESTADO_INSTAVEL");}
    if(unit.relevance==="MUITO_ALTA")score+=8;
    else if(unit.relevance==="ALTA")score+=5;
    if(!rs.length) reasons.push("CONTEUDO_NOVO");
    if(last){
      const days=(referenceDate-last)/86400000;
      score+=Math.min(10,Math.max(0,days/3));
    }
    return {unitId:unit.id,priorityScore:Math.round(score*100)/100,reasons,state};
  }

  function nextReview(unit, result, baseDate=new Date()){
    const correct=!!result.isCorrect;
    const confidence=result.confidence==null?3:Number(result.confidence);
    const recurring=!!result.recurringError;
    const delayed=!!result.isRetest;
    let days;
    if(!correct) days=recurring?1:2;
    else if(confidence<=2) days=3;
    else if(delayed && confidence>=4) days=10;
    else days=6;
    if(result.previousSuccessfulReviews>=2 && correct && confidence>=4) days=14;
    const d=new Date(baseDate.getTime()+days*86400000);
    return d.toISOString();
  }

  function dailyPlan(units, results, limit=6, referenceDate=new Date()){
    return (units||[]).map(u=>({...u,_p:priority(u,results,referenceDate)}))
      .sort((a,b)=>b._p.priorityScore-a._p.priorityScore)
      .slice(0,limit)
      .map(u=>({unitId:u.id,description:u.description||u.name||"",state:u._p.state,
        priorityScore:u._p.priorityScore,reasons:u._p.reasons,
        recommendedActivity:u._p.state===STATES.NONE?"ESTUDO+RECUPERACAO":
          (u._p.state===STATES.MASTERED?"RETESTE_ESPACADO":"REVISAO+QUESTOES")}));
  }

  function metrics(units,results){
    const studied=(units||[]).filter(u=>unitResults(u.id,results).length);
    const mastered=studied.filter(u=>deriveUnitState(u,unitResults(u.id,results),[])===STATES.MASTERED);
    return {
      coverage:units&&units.length?studied.length/units.length:null,
      domain:studied.length?mastered.length/studied.length:null,
      retention:retention(results),
      questionAccuracy:(results&&results.length)?mean(results.map(r=>r.isCorrect?1:0)):null,
      measuredUnits:studied.length,
      totalUnits:units?units.length:0
    };
  }

  global.LearningEngineV1={STATES,deriveUnitState,priority,nextReview,dailyPlan,metrics};
})(window);
