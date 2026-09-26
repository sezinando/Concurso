# Algoritmo de Agendamento V1

## Objetivo

Transformar evidências registradas em uma fila de revisão adaptativa.

## Princípios

- Não usar intervalo fixo para todos.
- Erro e baixa retenção reduzem intervalo.
- Acerto inseguro recebe revisão mais próxima.
- Sucessos repetidos permitem ampliar intervalo.
- Reteste atrasado é obrigatório para consolidar.
- Relevância do edital modula prioridade, não substitui evidência.

## Score de prioridade

A implementação deve normalizar, quando disponíveis:

- overdue;
- error recurrence;
- retention deficit;
- confidence deficit;
- transfer deficit;
- edital relevance;
- recency.

A ausência de uma variável não deve ser tratada como zero sem justificativa; deve ser marcada como não medida.

## Estados

NAO_INICIADO -> EM_ESTUDO -> ESTUDADO

ESTUDADO -> REVISAO quando houver lacuna/erro relevante.

REVISAO -> INSTAVEL quando há recuperação parcial ou retenção insuficiente.

INSTAVEL/REVISAO -> CONSOLIDADO somente após evidência de recuperação + aplicação + reteste.

CONSOLIDADO -> REVISAO se reteste posterior falhar de forma relevante.

## Intervalo

V1 usa uma política conservadora baseada em evidência:

- erro importante: curto;
- erro recorrente: muito curto;
- correto inseguro: curto/moderado;
- correto seguro: moderado;
- sucessos repetidos: progressivamente maior.

Os intervalos concretos são parâmetros do sistema, não fatos científicos universais. Devem ser validados pelo histórico do projeto.

## Saída

Cada unidade elegível deve receber:

- priorityScore;
- reason;
- nextReviewAt;
- recommendedActivity;
- evidenceNeeded.

## Integridade

Nunca criar domínio, retenção ou confiança por inferência silenciosa.