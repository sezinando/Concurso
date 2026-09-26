# Concurso Transpetro 2026 — Controle de Progresso

## Objetivo

Este repositório é o ponto de controle do desenvolvimento do sistema de estudos e questões para o concurso **Transpetro 2026 — Ênfase 4: Análise de Sistemas — Infraestrutura**.

O princípio do projeto é reduzir tempo de estudo e aumentar retenção e cobertura de questões por meio de um fluxo mensurável:

**Edital → mapeamento do conteúdo → estudo direcionado → recuperação ativa → simulado → diagnóstico → revisão das lacunas → reteste.**

---

## Estado atual

### Edital

- Concurso: Transpetro 2026
- Ênfase: 4 — Análise de Sistemas — Infraestrutura
- Banca: Cesgranrio
- Foco atual: **Banco de Dados**
- Item atual do edital: **11 — Banco de Dados**

### Item 11 — Banco de Dados

Escopo identificado:

- **11.1** Independência de dados
- **11.2** A abordagem entidade-relacionamento
- **11.3** O modelo Relacional
- **11.4** Gatilhos (triggers) e Procedimentos Armazenados (stored procedures)
- **11.5** A linguagem SQL
- **11.6** Conceitos de alta disponibilidade
- **11.7** Gerência de transações
- **11.8** Gerência de bloqueios
- **11.9** Gerência de desempenho

---

# Aula 00 — Banco de Dados

Material: Aula 00 — Banco de Dados.

### Mapeamento realizado

| Edital | Cobertura na Aula 00 |
|---|---|
| 11.1 Independência de dados | Forte |
| 11.2 Modelo ER | Insuficiente |
| 11.3 Modelo Relacional | Insuficiente |
| 11.4 Triggers / Stored Procedures | Não coberto |
| 11.5 SQL | Não coberto |
| 11.6 Alta disponibilidade | Parcial |
| 11.7 Transações | Boa base, mas incompleta |
| 11.8 Bloqueios | Parcial |
| 11.9 Desempenho | Parcial |

### Páginas priorizadas

- **24–26** — abstração/independência
- **33–37** — arquitetura ANSI/SPARC e independência de dados
- **27–32** — transações, COMMIT, ROLLBACK e ACID
- **56–58** — backup, recuperação, disponibilidade e desempenho
- **61–69** — questões Cesgranrio/comentadas

### Metodologia aplicada

Foi criada uma lista de recuperação ativa para verificar se o conteúdo consegue ser recuperado sem consulta ao PDF.

Critério de domínio:

- 🟢 90–100% — avanço
- 🟡 70–89% — revisão rápida + questões
- 🟠 50–69% — revisão do tópico
- 🔴 <50% — novo estudo

---

# Aula 01 — Modelos de Dados e Modelo Conceitual

## Status

**Em estudo atualmente.**

O foco direto da aula é principalmente:

### 11.2 — A abordagem entidade-relacionamento

Também existe uma introdução aos conceitos de modelos conceitual, lógico e físico.

---

## Mapeamento da Aula 01

| Páginas | Ação | Prioridade | Conteúdo |
|---|---|---|---|
| 3–8 | Estudar | 🟡 Alta | Modelos de dados; requisitos → conceitual → lógico → físico |
| 9–19 | Estudar | 🟢 Muito alta | Entidades, ocorrências, atributos e identificadores |
| 20–24 | Estudar | 🟢 Muito alta | Cardinalidade |
| 25–27 | Estudar | 🟢 Muito alta | Participação total/parcial |
| 28–31 | Estudar | 🟢 Alta | Grau dos relacionamentos |
| 32–39 | Estudar | 🟢 Muito alta | Entidades fortes/fracas |
| 40–44 | Estudar | 🟢 Muito alta | Entidades associativas |
| 45–50 | Estudar | 🟢 Alta | Generalização/especialização |
| 51–52 | Estudar seletivamente | 🟡 Média | Agregação e Crow’s Foot |
| 53–54 | Estudar seletivamente | 🟡 Média | Chen/Crow’s Foot |
| 55–77 | Questões | 🟢 Muito alta | Questões comentadas |
| 78–87 | Simulado | 🟢 Muito alta | 28 questões |
| 88 | Conferir | ⚪ | Gabarito |
| 89 | Pular | 🔴 | Bibliografia |

---

# Primeiro bloco da Aula 01

## Conteúdo estudado

O primeiro bloco em andamento é:

**Modelo de dados → requisitos → modelo conceitual → modelo lógico → modelo físico.**

### Objetivo de aprendizagem

Ao terminar este bloco, o candidato deve conseguir:

- explicar o que é um modelo de dados;
- diferenciar requisitos de modelagem;
- explicar o modelo conceitual;
- explicar o modelo lógico;
- explicar o modelo físico;
- ordenar corretamente requisitos → conceitual → lógico → físico;
- diferenciar nível de abstração e finalidade de cada modelo;
- reconhecer o que pertence à implementação física;
- evitar confundir modelo conceitual de dados com o nível conceitual da arquitetura ANSI/SPARC.

---

# Metodologia de simulados

A partir deste ponto, **todo simulado do projeto deve ser aplicado como quiz interativo de múltipla escolha com feedback imediato por questão**.

Formato obrigatório:

1. Apresentar a questão.
2. Exibir alternativas clicáveis.
3. O usuário seleciona uma alternativa.
4. Mostrar imediatamente:
   - se acertou ou errou;
   - gabarito;
   - comentário explicativo;
   - conceito avaliado.
5. Prosseguir para a próxima questão.
6. Ao final, consolidar o desempenho.

### Diagnóstico

O resultado não será medido apenas pelo percentual de acertos.

Cada questão deverá contribuir para classificar o conhecimento em:

- 🟢 **Domínio** — consegue recuperar e aplicar o conceito.
- 🟡 **Reconhecimento** — acerta, mas demonstra dependência das alternativas ou insegurança.
- 🔴 **Lacuna** — não domina o conceito ou não consegue aplicá-lo.

---

# Fluxo de estudo definido

Para cada tópico:

**1. Estudar somente o conteúdo necessário**

↓

**2. Recuperação ativa sem consulta**

↓

**3. Simulado interativo**

↓

**4. Correção imediata**

↓

**5. Diagnóstico por conceito**

↓

**6. Revisar somente as lacunas**

↓

**7. Novo simulado**

↓

**8. Consolidar domínio**

---

# Próximo passo

Concluir o primeiro bloco da Aula 01:

**Modelo de dados → requisitos → conceitual → lógico → físico**

e realizar o primeiro **simulado interativo de fixação** desse conteúdo.

Depois avançar para:

**Entidades → atributos → identificadores → relacionamentos.**

---

## Regra do projeto

Não considerar um conteúdo como "aprendido" apenas porque houve acerto em uma questão.

O objetivo é que o candidato consiga:

**explicar sem consulta + reconhecer no modelo + aplicar em questão de prova.**
