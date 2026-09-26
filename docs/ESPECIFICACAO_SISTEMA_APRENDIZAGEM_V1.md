# ESPECIFICAÇÃO DO SISTEMA DE APRENDIZAGEM V1

**Projeto:** Concurso Transpetro 2026  
**Repositório:** sezinando/Concurso  
**Versão:** 1.0  
**Data:** 2026-09-26  
**Status:** DECISÃO — especificação base para implementação

## 1. Objetivo

Construir um sistema de acompanhamento longitudinal que permita a qualquer chat do projeto responder:

> **"O que devo estudar hoje?"**

A resposta deverá ser calculada a partir de:
- edital e unidades observáveis;
- conteúdo efetivamente estudado;
- resultados de questões e QTI;
- erros e causas;
- confiança;
- retenção em retestes;
- transferências para questões novas;
- revisões vencidas;
- relevância do edital;
- histórico de recorrência.

O sistema não mede exposição ao material como sinônimo de aprendizagem. A unidade principal é o **conhecimento observável que pode ser recuperado, aplicado e retido**.

## 2. Documentos normativos

A implementação deve respeitar, nesta ordem:

1. `docs/LEARNING_SCIENCE_CONSOLIDADO.md` — princípios e evidências consolidadas.
2. `docs/LEARNING_SCIENCE_SOURCES.md` — fontes acadêmicas e hierarquia de evidência.
3. `docs/GUIA_OPERACIONAL_ESTUDO.md` — protocolo operacional.
4. `docs/ARQUITETURA_APRENDIZAGEM.md` — arquitetura de dados e eventos.
5. Este documento — especificação técnica que transforma os anteriores em comportamento de sistema.
6. `docs/DESEMPENHO.md` e `docs/CONTROLE_PROGRESSO.md` — métricas e controle já definidos.

Em caso de conflito, a fonte de maior nível prevalece e o conflito deve ser documentado.

## 3. Princípio central

**Aprender → Recuperar → Testar → Corrigir → Reaprender → Retestar → Espaçar → Misturar → Simular → Medir.**

Regra de ouro:

> Não medir quanto tempo o aluno ficou exposto; medir o que ele consegue recuperar, aplicar e reter após a exposição.

## 4. Camadas do sistema

`EDITAL → CONTEÚDO → UNIDADES → QUESTÕES → RESULTADOS → DIAGNÓSTICO → AGENDAMENTO → RETESTE → MÉTRICAS`

### 4.1 Unidade de conhecimento

Cada unidade deve representar uma competência observável, por exemplo:

- definir;
- distinguir;
- reconhecer;
- interpretar;
- aplicar;
- resolver;
- transferir para contexto novo.

Exemplo do item 11.2 — MER:
- modelos conceitual/lógico/físico;
- entidade;
- ocorrência;
- atributo;
- identificador/chave;
- relacionamento;
- cardinalidade;
- participação;
- grau;
- entidade forte;
- entidade fraca;
- entidade associativa;
- generalização;
- especialização;
- agregação.

## 5. Registrador central

O registrador deve ser a fonte longitudinal do estado de estudo.

Arquivo inicial:

`data/REGISTRO_ESTUDO.json`

Ele deverá conter, no mínimo:

### 5.1 Metadados
- versão do registrador;
- data da última atualização;
- projeto;
- origem dos dados.

### 5.2 Unidades
Cada unidade:
- `id`
- `disciplina`
- `editalItem`
- `description`
- `material`
- `pages`
- `relevance`
- `state`
- `domain`
- `retention`
- `transfer`
- `confidenceCalibration`
- `lastEvidenceAt`
- `nextReviewAt`
- `openErrors`
- `recurringErrors`
- `lastQuestionId`
- `notes`

### 5.3 Eventos
Eventos são imutáveis sempre que possível:
- `study`
- `retrieval`
- `question`
- `correction`
- `review`
- `retest`
- `simulation`

Cada evento deve preservar:
- timestamp;
- unidade;
- item do edital;
- fonte;
- resultado;
- evidência utilizada.

### 5.4 Questões
Cada resultado deve permitir:
- questão;
- fonte;
- tipo;
- resposta;
- acerto;
- confiança;
- tempo;
- dificuldade;
- tipo de erro;
- explicação visualizada;
- próxima revisão.

## 6. Estados de conhecimento

Estados válidos:

`NAO_INICIADO`  
`EM_ESTUDO`  
`ESTUDADO`  
`INSTAVEL`  
`REVISAO`  
`CONSOLIDADO`

Opcional:

`TRANSFERENCIA_NAO_COMPROVADA`

### Regra

Estado não deve ser definido arbitrariamente. Deve ser derivado das evidências.

- Sem evidência → NAO_INICIADO.
- Estudo sem teste suficiente → EM_ESTUDO.
- Evidência de teste inicial → ESTUDADO.
- Erros ou retenção baixa → INSTAVEL/REVISAO.
- Recuperação + aplicação + reteste bem-sucedido → CONSOLIDADO.
- Bom desempenho apenas em questões semelhantes → TRANSFERENCIA_NAO_COMPROVADA.

**Uma questão correta isolada nunca encerra o aprendizado.**

## 7. Tipos de questão

Toda questão deve preservar sua origem:

- `CESGRANRIO_REAL`
- `CESGRANRIO_ADAPTADA`
- `SIMILAR`
- `INEDITA`
- `ORIGINAL`

A fonte original nunca deve ser apagada quando uma questão for adaptada.

## 8. Tipos de erro

Taxonomia inicial:

- `CONCEITO`
- `CONFUSAO_ENTRE_CONCEITOS`
- `INTERPRETACAO`
- `APLICACAO`
- `DESATENCAO`
- `MEMORIA`
- `PROCEDIMENTO`
- `PALPITE`
- `TEMPO`
- `OUTRO`

Uma resposta correta com baixa confiança deve poder ser registrada como evidência fraca/instável.

## 9. Agendador de revisões

O agendador é adaptativo.

Prioridade maior para:
1. reteste vencido;
2. erro recorrente;
3. baixa retenção;
4. baixa confiança calibrada;
5. unidade de alta relevância do edital;
6. transferência não comprovada;
7. erro recente.

### Regra de espaçamento

- erro importante → intervalo menor;
- correto inseguro → intervalo curto/moderado;
- correto seguro e repetido → intervalo maior;
- falha no reteste → reduzir intervalo e retornar para revisão;
- sucessos sucessivos → ampliar intervalo.

Não utilizar um calendário fixo para todas as unidades.

## 10. O que estudar hoje

Qualquer chat que consulte o registrador deverá calcular uma fila de estudo com quatro blocos:

### A. Revisões vencidas
Unidades cujo `nextReviewAt` já passou.

### B. Reparação
Unidades com erros, baixa retenção ou estado INSTAVEL/REVISAO.

### C. Conteúdo novo
Próximas unidades do edital ainda não estudadas, respeitando pré-requisitos.

### D. Questões/simulação
Questões adequadas ao estágio de conhecimento, incluindo interleaving quando a estrutura mínima já estiver consolidada.

A ordem deve privilegiar aprendizado pendente antes de simplesmente avançar páginas.

## 11. Política de decisão diária

O orientador deverá produzir algo semelhante a:

1. **Revisão:** unidade X — motivo — questões sugeridas.
2. **Reparo:** unidade Y — erro recorrente — microconteúdo.
3. **Novo:** unidade Z — páginas/material.
4. **Aplicação:** N questões.
5. **Reteste:** unidades que exigem nova evidência.
6. **Registro:** atualizar eventos e próximos vencimentos.

Não informar somente "estude Banco de Dados". Informar **o que**, **por quê**, **como testar** e **qual evidência fechará a sessão**.

## 12. Métricas

### Coverage
`conteúdo concluído / conteúdo total × 100`

### Domain
`unidades dominadas / unidades estudadas × 100`

### Retention
Desempenho em reteste atrasado.

### Transfer
Desempenho em contexto novo preservando a mesma estrutura conceitual.

### Calibrated confidence
Relação entre confiança declarada e desempenho real.

### Recurring errors
Quantidade/frequência de perdas do mesmo conceito.

### Combined progress
Indicador interno atual:

`Coverage × 0,60 + Domain × 0,40`

Este índice é **gerencial**, não uma medida psicométrica validada nem previsão de nota.

## 13. Integridade dos dados

O sistema nunca deve:
- inventar resultado de QTI;
- considerar questão gerada como respondida;
- considerar página lida como domínio;
- considerar acerto isolado como consolidação;
- substituir fonte original sem registrar adaptação;
- preencher métricas ausentes por estimativa silenciosa.

Quando um dado não existir:

`null`, estado desconhecido ou "não medido".

## 14. QTI

O QTI deve registrar, quando disponível:
- questionId;
- unidade;
- item do edital;
- fonte;
- resposta;
- acerto;
- confiança;
- tempo;
- dificuldade;
- tipo de erro;
- explicação visualizada;
- próxima revisão.

O QTI continua sendo:
**questão → resposta → correção → justificativa → próxima → diagnóstico**.

A evolução acrescenta metadados de aprendizagem.

## 15. Overfitting

O sistema não pode concluir domínio pela repetição da mesma questão.

Para consolidar:
- variar redação;
- variar distratores;
- variar fonte;
- variar contexto;
- usar reteste atrasado;
- usar transferência quando aplicável.

## 16. Governança

Todo novo conhecimento incorporado ao projeto deve ser classificado como:

- `EVIDÊNCIA`
- `PRÁTICA`
- `HIPÓTESE`
- `MÉTRICA`
- `DECISÃO`

Isso evita que uma prática de estudo seja tratada como fato científico.

## 17. Arquitetura inicial de arquivos

```
data/
  REGISTRO_ESTUDO.json
  EDITAL.json
  UNIDADES.json
  QUESTOES.json
  RESULTADOS.json
  REVISOES.json
  METRICAS.json

docs/
  ESPECIFICACAO_SISTEMA_APRENDIZAGEM_V1.md
```

A primeira implementação pode usar JSON + localStorage/exportação. Persistência automática no GitHub exige autenticação/API ou backend e não deve ser presumida.

## 18. Roadmap

### V1 — Registro
- registrador central;
- unidades;
- eventos;
- resultados;
- revisões.

### V2 — QTI integrado
- captura automática dos resultados;
- confiança;
- tempo;
- erro;
- unidade;
- fonte.

### V3 — Agendador
- cálculo adaptativo de próximas revisões;
- fila "o que estudar hoje".

### V4 — Dashboard
- coverage;
- domain;
- retention;
- transfer;
- erros recorrentes;
- calendário de revisões;
- evolução temporal.

### V5 — Integração do edital completo
- decomposição de todos os itens;
- pesos;
- pré-requisitos;
- cobertura global.

### V6 — Simulação adaptativa
- seleção de questões por lacuna;
- interleaving;
- transferência;
- simulações longitudinais.

## 19. Critério de sucesso

O sistema será considerado funcional quando qualquer chat do projeto puder consultar o registrador e responder, com base em evidência registrada:

> **O que revisar hoje?**  
> **O que estudar novo?**  
> **Quais questões fazer?**  
> **Quais erros corrigir?**  
> **O que precisa de reteste?**  
> **Como está o progresso?**

Sem depender da memória informal de um chat específico.
