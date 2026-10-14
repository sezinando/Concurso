# CHECKPOINT — Transpetro 2026 — Revisão Banco de Dados
**Data local:** 2026-10-13  
**Edital:** Transpetro 2026 — Ênfase 4, Análise de Sistemas — Infraestrutura  
**Área:** Banco de Dados  
**Fonte de continuidade:** resultados QTI enviados pelo usuário nesta conversa  
**Regra de tempo:** nesta fase de aprendizagem, o tempo entre questões não é critério de avaliação. Priorizar conteúdo, erros e confiança. Considerar tempo apenas em baterias exclusivamente de questões/simulados.

## 1. Aula 00 — Fundamentos de Banco de Dados

### Evidência QTI
- **Evento:** `QTI-A00-10-1791933926200`
- **Data/hora do evento:** `2026-10-13T23:25:26.200Z`
- **Rodada:** Revisão Aula 00
- **Resultado:** 10/10 — **100%**
- **Questões:** 10 inéditas
- **Tempo informado:** 249,9 s total; 25 s médio — registrado, mas não usado para avaliar domínio.
- **Próxima ação indicada pelo QTI:** `SPACED_RETEST`

### Conteúdos respondidos corretamente
- SGBD e abstração (2 questões, incluindo integridade centralizada)
- Independência física e lógica de dados
- Arquitetura ANSI/SPARC — nível interno
- Transações e propriedades ACID: atomicidade, isolamento e durabilidade
- Atores de banco de dados / DBA

### Diagnóstico e estado
Desempenho excelente na bateria atual. A evidência é positiva, mas limitada a 10 questões inéditas e não comprova, isoladamente, retenção duradoura ou transferência para enunciados mais variados. Não houve registro de confiança nas respostas.

**Estado operacional:** desempenho positivo; aguardar reteste espaçado para verificar retenção e transferência. Não repetir imediatamente as mesmas 10 questões.

## 2. Aula 01 — Modelos de Dados e Modelo Conceitual (MER)

### Evidência QTI
- **Evento:** `QTI-A01-10-1791936305151`
- **Data/hora do evento:** `2026-10-14T00:05:05.151Z` (corresponde a 2026-10-13, horário local UTC−03)
- **Rodada:** Revisão Aula 01 — MER
- **Item do edital:** 11.2 — A abordagem entidade-relacionamento
- **Resultado:** 7/10 — **70%**
- **Questões:** 10 inéditas
- **Tempo informado:** 1.083,6 s total; 108,4 s médio — registrado, mas não usado como critério de domínio.
- **Próxima ação:** `REPAIR_AND_RETEST`

### Questões corretas
- A01-01 — modelos conceitual, lógico e físico
- A01-02 — entidades e instâncias
- A01-04 — atributos identificadores
- A01-05 — cardinalidade
- A01-06 — participação mínima
- A01-07 — grau de relacionamento / relacionamento unário-recursivo
- A01-08 — entidade fraca

### Erros a reparar
1. **A01-03 — Atributos compostos × multivalorados.**  
   Resposta do usuário: A; gabarito: D. Fixar: composto pode ser decomposto em subatributos; multivalorado admite vários valores para uma entidade.

2. **A01-09 — Entidade associativa e relacionamento N:M.**  
   Resposta do usuário: C; gabarito: B. Fixar o uso de uma entidade associativa (por exemplo, MATRICULA) para representar a associação ALUNO–DISCIPLINA e armazenar atributos do vínculo, como data e nota.

3. **A01-10 — Generalização/especialização total.**  
   Resposta do usuário: A; gabarito: B. Fixar: especialização total exige que cada instância do supertipo pertença a pelo menos um subtipo; parcial permite instâncias fora de todos os subtipos. Disjunção/sobreposição é uma dimensão distinta.

### Diagnóstico e estado
O item 11.2 permanece em revisão. Há evidência de domínio inicial em vários fundamentos do MER, mas três lacunas reapareceram na bateria atual. O erro em entidade associativa é especialmente relevante porque esse conceito já havia exigido reparo em rodadas anteriores; um acerto em reparo anterior não foi suficiente para demonstrar retenção/transferência.

**Estado operacional:** `REVISAO` / `TRANSFERENCIA_NAO_COMPROVADA` para o item 11.2; não marcar como consolidado. Não reestudar a aula inteira.

## 3. Próximas ações

1. Fazer micro-reparo apenas nos três tópicos errados da Aula 01:
   - atributos compostos × multivalorados;
   - entidade associativa e N:M;
   - especialização total × parcial e disjunta × sobreposta.
2. Aplicar um QTI-5 de reparo com questões novas, correção imediata e justificativa.
3. Se o desempenho no reparo for satisfatório, agendar reteste espaçado com enunciados diferentes. O resultado do reparo, isoladamente, não autoriza marcar consolidação.
4. Manter a Aula 00 em reteste espaçado; não repetir agora sua bateria de 10 questões.
5. Após o reparo da Aula 01, retomar o roteiro de estudo da Aula 02 no ponto planejado, sem perder o agendamento de revisão.

## 4. Regras operacionais preservadas
- QTI deve seguir `docs/QTI_ESPECIFICACAO_CANONICA.md` e o padrão visual escuro.
- Uma questão por vez; alternativas A–E; correção imediata; justificativa técnica; progresso; resultado final e JSON copiável.
- 100% em uma única bateria não significa domínio consolidado.
- Erro conceitual recorrente exige micro-reparo e reteste; não avançar apenas porque a porcentagem melhorou.
- Nesta fase, tempo de resposta não é critério de avaliação; priorizar conteúdo. Considerar tempo em baterias exclusivas de questões/simulados.
- Confiança não foi informada em nenhuma das duas sessões; não inferir chute ou excesso de confiança.

## 5. Resumo de continuidade
- **Aula 00:** 10/10 (100%); desempenho positivo; próximo passo = reteste espaçado.
- **Aula 01 / item 11.2:** 7/10 (70%); três lacunas; próximo passo = micro-reparo → QTI-5 de reparo → reteste espaçado.
- **Próxima tarefa recomendada ao retomar:** executar o micro-reparo e o QTI-5 da Aula 01, mantendo o critério de tempo definido pelo usuário.
