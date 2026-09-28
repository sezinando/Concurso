# QTI — Especificação Canônica Global

**Status:** OBRIGATÓRIO / NORMATIVO
**Versão:** 2.0
**Projeto:** Concurso Transpetro 2026
**Fonte de verdade:** este documento + REGISTRO_ESTUDO.json + ORIENTADOR_ESTUDO.md

## 1. Princípio central

QTI não é apenas um quiz visual. É um instrumento de diagnóstico e consolidação da aprendizagem que produz evidência estruturada, reutilizável pelo Orquestrador de Estudos.

Nenhum quiz, teste de fixação ou simulado QTI deve usar formato alternativo quando o objetivo for coletar evidência de aprendizagem.

## 2. Formato obrigatório

Toda sessão QTI deve ter:

- uma questão por vez;
- alternativas A, B, C, D e E clicáveis;
- correção imediatamente após a resposta;
- indicação inequívoca CORRETO ou INCORRETO;
- gabarito;
- explicação objetiva e tecnicamente precisa;
- botão Próxima questão;
- contador Questão X/Y;
- barra de progresso;
- resultado consolidado ao final;
- possibilidade de refazer o QTI;
- JSON integral de consolidação;
- botão 📋 Copiar JSON.

## 3. Interface visual normativa

- fundo escuro;
- card escuro;
- texto claro;
- alternativas claramente diferenciadas;
- verde para acerto;
- vermelho para erro;
- azul para seleção/progresso.

## 4. Evidência por questão

Registrar obrigatoriamente:

- questionId;
- topic/tema;
- selected;
- correctAnswer;
- result (CORRETA/INCORRETA);
- responseTimeSec;
- confidence;
- errorType.

Quando um campo não tiver evidência, usar null em vez de inferir.

## 5. Evidência da sessão

Registrar obrigatoriamente:

- eventId único;
- occurredAt;
- qti;
- rodada;
- editalItem;
- tema;
- total;
- acertos;
- erros;
- accuracy;
- tempoTotalSec;
- tempoMedioSec;
- sourceType;
- diagnostico;
- nextAction;
- questionResults.

A estrutura pode ser expandida, mas os campos essenciais não podem ser removidos.

## 6. JSON para consolidação

O resultado final deve sempre apresentar um bloco chamado **JSON para consolidação** contendo o JSON completo da sessão.

Estrutura mínima:

~~~json
{
  "eventId": "QTI5-...",
  "occurredAt": "...",
  "qti": "QTI-5",
  "rodada": "...",
  "editalItem": "E4-11-02",
  "tema": "...",
  "total": 5,
  "acertos": 0,
  "erros": 0,
  "accuracy": 0,
  "tempoTotalSec": 0,
  "tempoMedioSec": 0,
  "sourceType": "MULTIBANCA_ADAPTADA",
  "nextAction": "...",
  "diagnostico": [],
  "questionResults": [
    {
      "questionId": "...",
      "topic": "...",
      "result": "CORRETA",
      "selected": "A",
      "correctAnswer": "B",
      "responseTimeSec": 0,
      "confidence": null,
      "errorType": null
    }
  ]
}
~~~

## 7. Diagnóstico

Nunca interpretar aprendizagem somente pelo percentual.

Analisar, quando houver evidência:

- erros recorrentes;
- desconhecimento;
- interpretação;
- confusão conceitual;
- tempo excessivo;
- baixa confiança;
- acerto com baixa confiança;
- acerto consistente;
- necessidade de reparo;
- necessidade de reteste;
- espaçamento.

## 8. Regras de decisão

- 100% não significa automaticamente domínio definitivo.
- Acerto isolado não significa consolidação.
- Erro recorrente → REPAIR_AND_RETEST.
- Desempenho < 80% em reparo → normalmente manter tópico em reparo/revisão.
- Desempenho >= 80% → analisar também erros, confiança e tempo.
- Avanço exige evidência variada; evitar repetição literal.
- Erro conceitual recorrente → micro-reparo antes de avançar.
- Bom desempenho após reparo → reteste espaçado.
- Nunca avançar apenas porque o percentual aumentou.

## 9. Ciclo de aprendizagem

AQUISIÇÃO → RECUPERAÇÃO → APLICAÇÃO → FEEDBACK → DIAGNÓSTICO → REPARO → RETESTE → ESPAÇAMENTO → INTERLEAVING → SIMULAÇÃO → MEDIÇÃO → REAPRENDIZAGEM

## 10. Integração com o Orquestrador

O JSON recebido pelo Orquestrador deve permitir:

1. identificar o item do edital;
2. localizar o estado atual da unidade;
3. registrar nova evidência;
4. atualizar acertos/erros;
5. identificar erros recorrentes;
6. atualizar o estado de aprendizagem;
7. determinar próxima revisão;
8. decidir entre REPAIR, REPAIR_AND_RETEST, SPACED_RETEST, TRANSFER e ADVANCE;
9. informar objetivamente o próximo passo.

## 11. Regra de não desvio

Este documento é normativo. Não criar variantes de QTI que removam a correção imediata, a coleta de evidência, o diagnóstico ou o JSON de consolidação.

Se uma sessão for explicitamente solicitada para outro objetivo que não seja QTI, ela pode usar outro formato. Porém, qualquer solicitação de **QTI**, **quiz QTI**, **teste QTI**, **teste de fixação no padrão do projeto** ou equivalente deve obedecer a esta especificação.
