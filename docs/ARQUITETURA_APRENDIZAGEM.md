# Arquitetura do Sistema de Aprendizagem

## Camadas

`EDITAL → CONTEÚDO → UNIDADES → QUESTÕES → RESULTADOS → DIAGNÓSTICO → AGENDAMENTO → RETESTE → MÉTRICAS`

## Unidade

Cada unidade deve ter id, disciplina, item do edital, descrição, pré-requisitos, material, tópico, estado, domínio, retenção, última evidência, próximo reteste e erros abertos.

## Evento de aprendizagem

Registrar eventos: `study`, `retrieval`, `question`, `correction`, `review`, `retest`, `simulation`.

## Resultado de questão

Schema lógico sugerido:

```js
{
  questionId,
  timestamp,
  discipline,
  editalItem,
  topic,
  source,
  answerGiven,
  answerCorrect,
  confidence,
  responseTimeSec,
  difficulty,
  errorType,
  explanationViewed,
  nextReviewAt
}
```

## Estado derivado

O estado da unidade deve ser derivado dos eventos, não digitado arbitrariamente.

- sem eventos → `NAO_INICIADO`
- estudo sem teste → `EM_ESTUDO`
- teste inicial → `ESTUDADO`
- erros/retensão baixa → `REVISAO` ou `INSTAVEL`
- recuperação + aplicação + reteste → `CONSOLIDADO`

## Agendamento

Política inicial:
- erro → prioridade alta;
- acerto inseguro → revisão curta;
- acerto seguro → ampliar intervalo;
- falha no reteste → voltar um nível;
- sucesso repetido → ampliar intervalo.

No futuro, avaliar algoritmo adaptativo próprio ou integração com algoritmo de spaced repetition.

## Questão como unidade de treinamento

Cada questão deve contribuir para aprendizagem, diagnóstico, memória e seleção da próxima ação.

## Simulado como experimento

Cada simulado pode ser registrado como série longitudinal: condição, conteúdo, dificuldade, desempenho, erros e mudança após intervenção.

## Intervenção

`diagnóstico → intervenção curta → prática → reteste`

## Controle de overfitting

Não considerar domínio por repetição de questões idênticas. Exigir variação de enunciado, distrator ou fonte e, progressivamente, transferência.

## Qualidade do banco

Tags: `CESGRANRIO_REAL`, `CESGRANRIO_ADAPTADA`, `SIMILAR`, `INEDITA`, `ORIGINAL`.

A origem deve ser preservada.

## Métricas longitudinais

Cobertura, domínio, retenção, transferência, acurácia, confiança, tempo, erros reincidentes e revisões vencidas.

## Princípio

**O sistema otimiza aprendizagem observada, não tempo de exposição.**
