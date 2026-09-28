# Overview — Metodologia e Estratégia de Estudo Programado
## Concurso Transpetro 2026

**Status:** referência operacional global do projeto
**Versão:** 1.0
**Atualização:** 2026-09-29

---

## 1. Objetivo

Este documento consolida, em uma única visão operacional, as regras que devem orientar o estudo do Concurso Transpetro 2026.

A finalidade é manter todos os chats, QTI, registros e futuros componentes do sistema em consonância com a mesma estratégia:

**Edital → mapeamento → estudo direcionado → recuperação ativa → questões → feedback → diagnóstico → reparo → reteste → espaçamento → interleaving → simulação → medição → reaprendizagem.**

A meta do sistema é **otimizar aprendizagem observada**, e não tempo de exposição.

## 2. Princípios que não devem ser quebrados

### 2.1 Cobertura ≠ domínio
Estudar uma aula ou página aumenta cobertura. Conseguir recuperar, reconhecer, diferenciar e aplicar o conteúdo aumenta domínio.

- material lido ≠ conteúdo dominado;
- aula concluída ≠ edital dominado;
- questão acertada ≠ consolidação;
- 100% em um QTI ≠ domínio definitivo.

### 2.2 Evidência antes de conclusão
Quando não houver evidência suficiente, o estado deve permanecer como não medido, e não ser preenchido por inferência.

### 2.3 Estudo adaptativo
A próxima atividade deve ser determinada pelo estado observado:
1. revisões vencidas;
2. retestes pendentes;
3. erros recorrentes;
4. reparos necessários;
5. conteúdo novo elegível;
6. questões de aplicação;
7. interleaving;
8. simulação.

## 3. Unidade mínima de controle

A hierarquia oficial é:

**Edital → Disciplina → Item do edital → Unidade de estudo → Material/aula → páginas → tópico → questões → evidências.**

Cada unidade deve permitir acompanhar disciplina, item do edital, tópico, material, páginas, status, cobertura, domínio, retenção, último QTI, último reteste, erros abertos e próxima revisão.

## 4. Ciclo operacional de cada unidade

### A — Aquisição
Estudar somente o necessário para construir a estrutura conceitual.

Progressão recomendada para conteúdo complexo:
**explicação → exemplo resolvido → exercício guiado → recuperação independente → questão nova.**

### B — Recuperação
Fechar o material e tentar reconstruir definições, regras, diferenças, estruturas, exemplos e relações entre conceitos.

### C — Aplicação
Resolver questões da banca ou questões equivalentes/adaptadas.

### D — Feedback
Cada questão deve informar resultado, gabarito, por que está correta, por que a alternativa escolhida está errada quando aplicável e o conceito avaliado.

### E — Diagnóstico
Classificar o estado observado: domínio, reconhecimento, instabilidade, lacuna, confusão conceitual, baixa confiança, tempo excessivo ou erro recorrente.

### F — Reparo
Voltar somente ao conceito necessário. Não repetir automaticamente uma aula inteira quando a evidência aponta para uma lacuna localizada.

### G — Reteste
Aplicar questão nova ou conjunto novo sobre o mesmo conceito. Evitar repetir literalmente a mesma questão.

### H — Espaçamento
Recuperar novamente depois de um intervalo. Um acerto isolado não encerra a unidade.

## 5. Política de decisão

| Evidência | Próxima ação |
|---|---|
| Sem estudo | AQUISIÇÃO |
| Estudou, mas não testou | RECUPERAÇÃO + QUESTÕES |
| Erro | REPAIR_AND_RETEST |
| Erro recorrente | MICRO-REPARO + RETESTE |
| Acerto com baixa confiança | REVISÃO CURTA + RETESTE |
| Acerto estável | ESPAÇAMENTO |
| Sucesso repetido em contextos variados | CONSOLIDAÇÃO / AVANÇO |
| Falha no reteste | Reduzir intervalo e retornar ao reparo |
| Conteúdo novo complexo | Aquisição estruturada antes de interleaving |

## 6. Critérios de desempenho

Os percentuais são indicadores operacionais, não declarações científicas de domínio.

| Resultado | Interpretação operacional |
|---:|---|
| 90–100% | candidato a avanço, condicionado a retenção e recuperação |
| 80–89% | bom domínio; revisar erros e verificar confiança/tempo |
| 70–79% | atenção; revisão + novo QTI |
| 50–69% | revisão necessária |
| <50% | restudar antes de avançar |

A decisão final nunca deve depender apenas do percentual.

## 7. Métricas longitudinais

**Cobertura:** quanto do programa foi estudado.

**Domínio:** quanto do conteúdo estudado foi demonstrado.

**Retenção:** quanto permanece recuperável em retestes posteriores.

**Transferência:** capacidade de aplicar o conhecimento em questão nova ou contexto diferente.

**Acurácia:** percentual de respostas corretas.

**Confiança:** segurança declarada pelo candidato.

**Tempo:** velocidade de recuperação/aplicação.

**Erros reincidentes:** conceitos que continuam falhando após intervenção.

## 8. QTI — instrumento oficial de medição

Todo comando QTI-[N] deve seguir o padrão canônico do projeto.

Fluxo:

**Questão → resposta → correção imediata → justificativa → próxima → resultado → diagnóstico → JSON.**

Obrigatório:
- uma questão por vez;
- A–E;
- correção imediata;
- CORRETO/INCORRETO;
- gabarito;
- justificativa;
- contador;
- barra de progresso;
- resultado final;
- diagnóstico;
- possibilidade de refazer;
- JSON completo;
- botão Copiar JSON.

O QTI é um instrumento de evidência de aprendizagem, não apenas um mecanismo de pontuação.

## 9. Qualidade das questões

Preservar a origem. Classificar, quando aplicável:
- CESGRANRIO_REAL
- CESGRANRIO_ADAPTADA
- MULTIBANCA_ADAPTADA
- SIMILAR
- INEDITA
- ORIGINAL

Questões reais não devem ter enunciado, alternativas ou gabarito alterados sem identificação explícita de adaptação.

## 10. Regra para erros

**erro → causa → regra → microexplicação → questão análoga → reteste futuro.**

Quando houver evidência, classificar: desconhecimento, confusão conceitual, interpretação, distração, chute, aplicação, transferência ou tempo. Quando a evidência não permitir classificação, registrar null.

## 11. Regra para acertos

**Acerto seguro:** evidência positiva.

**Acerto com dúvida:** não considerar consolidado.

**Acerto muito rápido:** pode indicar domínio, mas também reconhecimento superficial; verificar em questão variada.

**Acerto repetido:** aumenta a evidência de domínio.

**Acerto em reteste espaçado:** aumenta a evidência de retenção.

## 12. Interleaving

Não misturar indiscriminadamente. Primeiro estabelecer estrutura mínima e estabilidade; depois misturar conceitos semelhantes para exigir a identificação de qual regra utilizar.

## 13. Estudo reverso

**questões → lacunas → teoria específica → nova questão → reteste.**

Usar quando o conhecimento já estiver parcialmente construído, evitando repetir grandes blocos de teoria quando a evidência mostra que somente um subconjunto precisa de reparo.

## 14. Orientador diário

A pergunta central do sistema é: **O que devemos estudar hoje?**

A decisão deve considerar revisões vencidas, retestes, erros recorrentes, relevância do edital, pré-requisitos, conteúdo novo elegível, aplicação, interleaving e simulação.

Não priorizar uma disciplina apenas porque ficou muitos dias sem ser estudada.

## 15. Estado de aprendizagem

Estados oficiais:
- NAO_INICIADO
- EM_ESTUDO
- ESTUDADO
- REVISAO
- INSTAVEL
- CONSOLIDADO

O estado deve ser derivado das evidências, não digitado arbitrariamente.

## 16. Registro obrigatório de eventos

O sistema deve preservar eventos de aprendizagem:
- study
- retrieval
- question
- correction
- review
- retest
- simulation

Cada QTI deve fornecer dados suficientes para alimentar o histórico.

## 17. Estado atual observado — Português / Aula 00

Foi executado **QTI-10 — Avaliação de conhecimento — Aula 00**.

Resultado observado:
- 10 questões
- 9 acertos
- 1 erro
- 90%
- tempo total: 237,5 s
- tempo médio: 23,8 s

Erro: **Questão 4 — Pronomes / colocação**.

- resposta: A
- gabarito: B
- tempo: 36,0 s

A evidência disponível aponta para investigação específica em **pronomes de tratamento/concordância**, e não para repetir toda a Aula 00.

### Decisão operacional
**REPAIR_AND_RETEST**

Próxima intervenção:
> micro-revisão de pronomes de tratamento → QTI-5 de reteste.

Depois:
- recuperação consistente → espaçar;
- novo erro → reparar novamente;
- desempenho positivo no reteste → avançar progressivamente para o próximo bloco.

## 18. Regra específica para o Concurso Transpetro

O sistema deve manter duas dimensões simultâneas:

### Cobertura do edital
Garantir que todo o conteúdo relevante seja estudado.

### Domínio
Garantir que o conteúdo estudado seja efetivamente recuperável e aplicável.

Não sacrificar cobertura global por excesso de aprofundamento de uma única disciplina. Ao mesmo tempo, não avançar indefinidamente pelo edital acumulando conteúdo instável.

O objetivo é equilibrar **cobertura × domínio × retenção × aplicação**.

## 19. Fluxo macro do projeto

```
EDITAL
  ↓
MAPEAMENTO
  ↓
UNIDADES
  ↓
ESTUDO DIRECIONADO
  ↓
RECUPERAÇÃO
  ↓
QTI / QUESTÕES
  ↓
FEEDBACK
  ↓
DIAGNÓSTICO
  ↓
REPARO → RETESTE → NOVA EVIDÊNCIA
  ↓
INTERLEAVING
  ↓
SIMULAÇÃO
  ↓
MEDIÇÃO
  ↓
REAPRENDIZAGEM
```

## 20. Regra de ouro

> **Não queremos medir quanto estudamos. Queremos medir quanto conseguimos recuperar, aplicar, reter e transferir.**

Este princípio deve orientar o edital, o cronograma, os QTI, o banco de questões, o dashboard e o orientador de estudo.

## Documentos normativos relacionados

- PROGRESSO.md
- docs/CONTROLE_PROGRESSO.md
- docs/DESEMPENHO.md
- docs/GUIA_OPERACIONAL_ESTUDO.md
- docs/ARQUITETURA_APRENDIZAGEM.md
- docs/ORIENTADOR_ESTUDO.md
- docs/QTI_ESPECIFICACAO_CANONICA.md
- docs/QTI_REQUISITOS_MINIMOS.md
- docs/QTI_PADRAO_VISUAL_DARK.md

Este documento é um overview operacional; os documentos normativos específicos continuam sendo a fonte detalhada de cada componente.