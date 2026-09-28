(function(){
  "use strict";

  const LETTERS=["A","B","C","D","E"];
  let state=null;

  function escapeHtml(value){
    return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  }

  function normalize(config){
    if(!config || !Array.isArray(config.questions) || !config.questions.length){
      throw new Error("QTI: config.questions deve conter pelo menos uma questão.");
    }
    return {
      title:config.title||"QTI — Concurso",
      qti:config.qti||"QTI", rodada:config.rodada||null, editalItem:config.editalItem||null, tema:config.tema||null, sourceType:config.sourceType||null, eventId:config.eventId||null,
      questions:config.questions.map((q,i)=>({
        id:q.id??i+1,
        source:q.source||"",
        topic:q.topic||"",
        question:q.question||q.enunciado||"",
        options:q.options||q.alternatives||{},
        answer:String(q.answer||q.gabarito||"").toUpperCase(),
        explanation:q.explanation||q.justification||q.justificativa||"",
        editalItem:q.editalItem||null, unitId:q.unitId||null, difficulty:q.difficulty||null, questionType:q.questionType||q.type||"ORIGINAL"
      }))
    };
  }

  function renderQuestion(){
    state.questionStartedAt=performance.now();
    const app=document.getElementById("qti-app");
    const q=state.questions[state.index];
    const pct=((state.index)/state.questions.length)*100;
    const source=[q.source,q.topic].filter(Boolean).join(" · ");

    app.innerHTML=`
      <section class="qti-card">
        <header class="qti-head">
          <div>
            <h1 class="qti-title">${escapeHtml(state.title)}</h1>
          </div>
          <div class="qti-counter">Questão ${state.index+1}/${state.questions.length}</div>
        </header>
        <div class="qti-progress" role="progressbar" aria-valuemin="1" aria-valuemax="${state.questions.length}" aria-valuenow="${state.index+1}">
          <span style="width:${Math.max(4,pct)}%"></span>
        </div>
        ${source?`<div class="qti-source">${escapeHtml(source)}</div>`:""}
        <p class="qti-question">${escapeHtml(q.question)}</p>
        <div class="qti-confidence"><label>Confiança: <select id="qti-confidence"><option value="">Não informar</option><option value="1">1 — chute</option><option value="2">2 — baixa</option><option value="3">3 — média</option><option value="4">4 — alta</option><option value="5">5 — muito alta</option></select></label></div>
        <div class="qti-options">
          ${LETTERS.filter(l=>q.options[l]!=null).map(l=>`
            <button class="qti-option" data-answer="${l}">
              <strong>${l})</strong> ${escapeHtml(q.options[l])}
            </button>`).join("")}
        </div>
        <div id="qti-feedback" hidden></div>
        <button id="qti-next" class="qti-next" disabled>
          ${state.index===state.questions.length-1?"Ver resultado":"Próxima questão →"}
        </button>
      </section>`;

    document.getElementById("qti-confidence").addEventListener("change",e=>state.confidence=e.target.value?Number(e.target.value):null);
    app.querySelectorAll(".qti-option").forEach(btn=>btn.addEventListener("click",()=>answer(btn.dataset.answer)));
    document.getElementById("qti-next").addEventListener("click",next);
  }

  function answer(letter){
    if(state.answered)return;
    state.answered=true;
    const q=state.questions[state.index];
    const correct=letter===q.answer;
    if(correct)state.score++;
    state.results.push({id:q.id,topic:q.topic,chosen:letter,correct:q.answer,isCorrect:correct,confidence:state.confidence,responseTimeSec:Math.round((performance.now()-state.questionStartedAt)/100)/10,errorType:correct?null:"UNKNOWN",source:q.source,editalItem:q.editalItem||null,unitId:q.unitId||null,difficulty:q.difficulty||null,questionType:q.questionType||"ORIGINAL"});

    document.querySelectorAll(".qti-option").forEach(btn=>{
      btn.disabled=true;
      const a=btn.dataset.answer;
      if(a===q.answer)btn.classList.add("is-correct");
      if(a===letter && !correct)btn.classList.add("is-wrong");
      if(a===letter && correct)btn.classList.add("is-selected");
    });

    const fb=document.getElementById("qti-feedback");
    fb.hidden=false;
    fb.className="qti-feedback "+(correct?"correct":"wrong");
    fb.innerHTML=`
      <div class="qti-feedback-title">${correct?"✅ CORRETO":"❌ INCORRETO"}</div>
      <div><strong>Gabarito: ${escapeHtml(q.answer)}</strong></div>
      <div>${escapeHtml(q.explanation||"Sem justificativa cadastrada.")}</div>`;
    document.getElementById("qti-next").disabled=false;
  }

  function next(){
    if(!state.answered)return;
    if(state.index===state.questions.length-1)return renderResult();
    state.index++;
    state.answered=false;
    state.confidence=null;
    renderQuestion();
  }

  function persistResults(){
    try{
      const key="concurso.learning.questionResults.v1";
      const previous=JSON.parse(localStorage.getItem(key)||"[]");
      localStorage.setItem(key,JSON.stringify(previous.concat(state.results.map(r=>({...r,timestamp:new Date().toISOString()})))));
      window.dispatchEvent(new CustomEvent("concurso:qti-results",{detail:state.results}));
    }catch(e){console.warn("QTI: não foi possível persistir resultados localmente.",e);}
  }

  function renderResult(){
    persistResults();
    const eventId = (state.config.eventId || "QTI-"+Date.now());
    const total = state.questions.length;
    const errors = state.results.filter(r=>!r.isCorrect);
    const payload = {
      eventId,
      occurredAt:new Date().toISOString(),
      qti:state.config.qti || "QTI",
      rodada:state.config.rodada || null,
      editalItem:state.config.editalItem || null,
      tema:state.config.tema || null,
      total,
      acertos:state.score,
      erros:total-state.score,
      accuracy:state.score/total,
      tempoTotalSec:Math.round(state.results.reduce((a,r)=>a+(r.responseTimeSec||0),0)*10)/10,
      tempoMedioSec:Math.round((state.results.reduce((a,r)=>a+(r.responseTimeSec||0),0)/total)*10)/10,
      sourceType:state.config.sourceType || null,
      nextAction:state.score===total ? "SPACED_RETEST" : "REPAIR_AND_RETEST",
      diagnostico:[...new Set(errors.map(r=>r.topic).filter(Boolean))],
      questionResults:state.results.map(r=>({
        questionId:r.id, topic:r.topic, result:r.isCorrect?"CORRETA":"INCORRETA",
        selected:r.chosen, correctAnswer:r.correct, responseTimeSec:r.responseTimeSec,
        confidence:r.confidence, errorType:r.errorType
      }))
    };
    const json=JSON.stringify(payload,null,2);
    const app=document.getElementById("qti-app");
    const total=state.questions.length;
    const pct=Math.round(state.score/total*100);
    let diagnosis=pct===100?"Domínio excelente":pct>=80?"Ótimo desempenho":pct>=60?"Bom desempenho — revisar erros":"Revisão recomendada antes de avançar";
    const errors=state.results.filter(r=>!r.isCorrect);
    const topics=[...new Set(errors.map(r=>r.topic).filter(Boolean))];

    app.innerHTML=`
      <section class="qti-card qti-result">
        <h1 class="qti-title">${escapeHtml(state.title)}</h1>
        <div class="qti-score">${state.score}/${total}</div>
        <div>${pct}% de acerto</div>
        <div class="qti-diagnosis">${diagnosis}</div>
        <div class="qti-review">
          <h3>Diagnóstico</h3>
          ${errors.length
            ? `<p>Questões a revisar: ${errors.map(e=>escapeHtml(String(e.id))).join(", ")}.</p>
               ${topics.length?`<p><strong>Assuntos:</strong> ${topics.map(escapeHtml).join(", ")}</p>`:""}`
            : "<p>Nenhuma questão errada neste QTI.</p>"}
        </div>
        <div class="qti-json-block">
          <h3>JSON para consolidação</h3>
          <textarea id="qti-json" readonly></textarea>
          <button class="qti-copy" id="qti-copy">Copiar JSON</button>
        </div>
        <button class="qti-restart" id="qti-restart">Refazer QTI</button>
      </section>`;
    document.getElementById("qti-json").value=json;
    document.getElementById("qti-copy").addEventListener("click",async()=>{
      const b=document.getElementById("qti-copy");
      try{await navigator.clipboard.writeText(json);b.textContent="✓ JSON copiado";setTimeout(()=>b.textContent="Copiar JSON",1800)}
      catch(e){const t=document.getElementById("qti-json");t.select();document.execCommand("copy");b.textContent="✓ JSON copiado";}
    });
    document.getElementById("qti-restart").addEventListener("click",()=>start(state.config));
  }


  function start(config){
    state={config:normalize(config),index:0,score:0,answered:false,results:[],confidence:null,questionStartedAt:performance.now()};
    state.title=state.config.title;
    state.questions=state.config.questions;
    renderQuestion();
  }

  window.QTI={start};
})();
