# CHECKPOINT — 2026-10-02 — Aula 00 / QTI-5

## Contexto
Projeto: Concurso Transpetro 2026
Tema: Banco de Dados — Aula 00
Itens envolvidos: 11.1 Independência de dados; 11.6 conceitos de alta disponibilidade; 11.7 Gerência de transações; 11.9 Gerência de desempenho.
Etapa: fixação/revisão inicial da Aula 00
Evidência: QTI5-AULA00-1790901365507
Data: 2026-10-02

## Resultado
- Total: 5
- Acertos: 4
- Erros: 1
- Accuracy: 80%
- Fonte: MULTIBANCA_ADAPTADA
- Próxima ação informada pelo QTI: REPAIR_AND_RETEST
- Confiança: não informada

## Desempenho por tópico

### 11.1 — Independência de dados
- Q01: correta — independência física.
- Q02: incorreta — independência lógica.
- Erro: desconhecimento.
- Diagnóstico: há uma lacuna conceitual específica na distinção entre independência física e lógica.

### 11.7 — Gerência de transações
- Q03: correta — COMMIT.
- Q04: correta — Atomicidade/ACID.
- Diagnóstico: conceitos básicos demonstrados nesta rodada.

### 11.6/11.9 — Recuperação, alta disponibilidade e desempenho
- Q05: correta — associação de backup, recuperação e replicação aos conceitos trabalhados de recuperação/alta disponibilidade.
- Diagnóstico: conceito reconhecido nesta amostra.

## Diagnóstico geral

Resultado de 80% indica desempenho funcional para esta rodada, mas **não comprova consolidação da Aula 00**.

O único erro foi concentrado em 11.1 e é conceitualmente importante porque envolve a distinção entre:
- independência física: alteração no nível interno/físico sem exigir alteração no esquema conceitual;
- independência lógica: alteração no esquema conceitual sem exigir alteração nos esquemas externos.

A resposta incorreta foi na questão de independência lógica, enquanto a questão de independência física foi respondida corretamente. Portanto, o próximo reparo deve ser **direcionado à diferenciação física × lógica**, e não uma revisão integral da Aula 00.

## Tempo de resposta

Conforme decisão registrada no checkpoint anterior:

Durante aprendizagem, recuperação, reparo e revisão conceitual, **tempo não é critério de desempenho**.

Os tempos desta sessão:
- Q01: 5,4s
- Q02: 34,8s
- Q03: 11,3s
- Q04: 15,7s
- Q05: 26,1s

Não serão usados para penalizar, classificar domínio ou determinar avanço nesta etapa.

Tempo será analisado posteriormente em:
- bateria exclusivamente de questões;
- treinamento de prova;
- simulados;
- sessões com objetivo explícito de ritmo/eficiência.

## Estado pedagógico recomendado

### Aula 00 / itens avaliados
**EM_ESTUDO / TRANSFERÊNCIA_NAO_COMPROVADA**

Não marcar como CONSOLIDADO porque:
- houve erro conceitual recente em 11.1;
- a amostra foi curta (5 questões);
- retenção tardia ainda não foi observada;
- transferência para questões novas/variadas ainda precisa ser comprovada.

### 11.1 — Independência de dados
**REVISÃO / REPARO DIRECIONADO**

Foco:
1. nível externo × conceitual × interno;
2. mapeamento externo/conceitual;
3. mapeamento conceitual/interno;
4. independência lógica;
5. independência física;
6. questões que exijam distinguir as duas.

### 11.7 — Transações
Evidência positiva nesta rodada. Não há necessidade de repetir imediatamente o conteúdo inteiro.

### 11.6/11.9
Evidência positiva nesta rodada, mas cobertura da Aula 00 é parcial. Não considerar os itens integralmente dominados apenas por esta questão.

## Próxima intervenção

Executar **QTI de reparo curto**, preferencialmente 3–5 questões, concentrado em:
- independência lógica × física;
- ANSI/SPARC;
- relações entre níveis e mapeamentos.

Depois:
1. novo reteste variado;
2. espaçamento;
3. somente após evidências independentes e tardias considerar avanço/consolidação.

## Regra operacional de tempo

QTI de aprendizagem/reparo:
**precisão > compreensão > diagnóstico > velocidade**

QTI de questões/simulado:
**precisão + velocidade + consistência**

## Observação sobre registro

Este checkpoint registra a evidência QTI5-AULA00-1790901365507. O arquivo de registro histórico `data/REGISTRO_ESTUDO.json` ainda precisa ser sincronizado separadamente caso se queira incorporar este evento ao registro estruturado do motor.

## Referência
Este checkpoint deve ser usado como ponto de continuidade para os próximos chats do projeto Concurso Transpetro.
