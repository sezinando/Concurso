# Registro de Origem de Questões — Português

## Objetivo

Manter a proveniência e o histórico de aplicação das questões utilizadas nos QTIs de Português, permitindo:

1. evitar repetição automática de questões já aplicadas;
2. repetir uma questão somente quando houver finalidade explícita de reparo, reteste, retenção ou simulação;
3. preservar banca, concurso, ano, identificador, fonte e localização da questão;
4. distinguir questões reais, adaptadas e autorais;
5. permitir auditoria futura do histórico de exposição às questões.

## Regra operacional

**Questão aplicada uma vez não deve ser reaplicada automaticamente.**

A repetição é permitida quando o QTI declarar uma finalidade, por exemplo:

- RETESTE
- REPARO
- RETENCAO
- REVISAO_ESPACADA
- SIMULACAO
- VALIDACAO_DE_ERRO

Quando repetida, a nova aplicação deve continuar registrando o mesmo identificador de origem e acrescentar o novo evento de aplicação.

## Convenção de identificação

Para questões de concursos:

<CONCURSO>-<ANO>-<ID_ORIGEM>

Exemplo deste lote:

TRANSPETRO-2023-TP2023-Q01

O identificador interno do QTI (questionId) não substitui o identificador de origem.

## Registro atual

### QTI-5 — CESGRANRIO / TRANSPETRO 2023

**Aplicação:** 2026-09-29  
**QTI:** QTI-5  
**SourceType:** REAL_QUESTION_USER_PROVIDED_PDF  
**Fonte primária:** e-book fornecido pelo usuário, *Língua Portuguesa - Petrobras - Questões Comentadas da Cesgranrio*  
**Concurso:** TRANSPETRO/2023  
**Banca:** CESGRANRIO

| ID de origem | QTI | Tema | Página da fonte | Resultado | Tempo |
|---|---|---|---:|---|---:|
| TP2023-Q01 | QTI-5 | Interpretação de texto / sentido | 4 | CORRETA | 34,3 s |
| TP2023-Q02 | QTI-5 | Interpretação de texto / inferência | 4–5 | CORRETA | 1,9 s |
| TP2023-Q03 | QTI-5 | Crase / regência / semântica | 5 | CORRETA | 104,9 s |
| TP2023-Q04 | QTI-5 | Tempos e modos verbais / correlação verbal | 9 | CORRETA | 57,4 s |
| TP2023-Q05 | QTI-5 | Semântica / substituição vocabular | 10 | CORRETA | 28,6 s |

### Estado de exposição

- TP2023-Q01: aplicada 1 vez.
- TP2023-Q02: aplicada 1 vez.
- TP2023-Q03: aplicada 1 vez.
- TP2023-Q04: aplicada 1 vez.
- TP2023-Q05: aplicada 1 vez.
- **Repetição automática:** NÃO.
- **Repetição proposital:** permitida mediante finalidade explícita.

## Histórico de aplicações anteriores

Questões reais já utilizadas em Português antes deste registro:

| ID de origem | Concurso/banca | Tema | Aplicação |
|---|---|---|---|
| Q2174490 | CESGRANRIO — AGERIO/2023 | Colocação pronominal | QTI-2 |
| Q2174494 | CESGRANRIO — AGERIO/2023 | Pronomes de tratamento | QTI-2 |

Esses identificadores também devem ser tratados como **já expostos**.

## Regra para futuros geradores de QTI

Antes de montar um QTI com questões reais:

1. consultar este registro;
2. excluir questões já aplicadas da seleção automática;
3. registrar a origem das novas questões;
4. se uma questão conhecida for necessária para reteste, marcar explicitamente a finalidade;
5. nunca criar um novo identificador para mascarar uma repetição da mesma questão.

## Campos mínimos recomendados

Cada questão real deverá preservar, quando disponível:

- sourceId
- contest
- year
- bank
- sourceDocument
- sourcePage
- questionId
- topic
- sourceType
- firstAppliedAt
- applicationCount
- lastApplicationPurpose

## Princípio

**O histórico de desempenho responde "como o candidato foi".  
O registro de origem responde "qual questão já foi vista".**

Os dois registros são complementares e não devem ser confundidos.
