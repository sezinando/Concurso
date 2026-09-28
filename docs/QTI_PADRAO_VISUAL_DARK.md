# Padrão Visual QTI — Dark Mode

## Objetivo
Documentar o padrão visual e comportamental adotado para os simulados interativos QTI do projeto Concurso Transpetro.

O padrão foi validado pelo usuário e passa a ser a referência para novos quizzes.

## 1. Tema visual
O quiz deve utilizar **Dark Mode real**, sem fundo azul dominante.

| Elemento | Padrão |
|---|---|
| Fundo externo | Preto quase absoluto (`#080808`) |
| Cartão principal | Grafite muito escuro (`#121212`) |
| Bordas | Cinza escuro (`#2b2b2b`) |
| Texto principal | Branco / quase branco (`#f5f5f5`) |
| Texto secundário | Cinza claro |
| Opção normal | Grafite (`#1a1a1a`) |
| Opção hover | Grafite mais claro |
| Seleção/destaque | Azul pode ser usado pontualmente |
| Resposta correta | Verde escuro + borda verde |
| Resposta incorreta | Vermelho escuro + borda vermelha |
| Feedback | Fundo escuro de alto contraste |

**Regra principal:** azul não deve ser usado como fundo geral do quiz. Azul fica restrito a estados de seleção/destaque quando necessário.

## 2. Estrutura do cartão
O QTI deve apresentar:
1. título do quiz;
2. contador de questão;
3. barra de progresso;
4. identificação da banca/fonte;
5. enunciado;
6. alternativas A–E;
7. feedback imediato;
8. botão de próxima questão;
9. indicação de progresso.


### 2.1 Fidelidade visual de questões reais

Para **questões reais de concurso**, o padrão visual também deve preservar marcações de significado presentes na fonte original. O destaque faz parte do conteúdo quando a questão o utiliza para indicar o objeto da análise.

Exemplos:
- “pronome destacado” → o pronome deve aparecer efetivamente destacado;
- palavra destacada → a palavra deve permanecer visualmente identificável;
- trecho sublinhado/itálico/negrito → preservar a marcação quando ela for relevante à questão.

**Não apresentar como texto corrido uma questão cuja resolução dependa de um destaque que foi removido.** Isso é considerado falha de fidelidade e deve ser corrigido antes da aplicação do QTI.

## 3. Estados das alternativas
### Estado normal
- Fundo grafite escuro.
- Texto claro.
- Borda cinza escura.
- Contraste suficiente para leitura prolongada.

### Estado correto
- alternativa correta em **verde escuro**;
- borda verde;
- texto claro;
- indicação visual `✅ CORRETO` no feedback.

### Estado incorreto
- alternativa escolhida em **vermelho escuro**;
- alternativa correta também deve ser destacada;
- texto permanece claro;
- indicação visual `❌ INCORRETO`.

### Após responder
As alternativas devem ficar desabilitadas para impedir alteração da resposta.

## 4. Feedback imediato
Cada questão deve fornecer imediatamente:
- resultado da resposta;
- alternativa correta;
- justificativa objetiva;
- explicação suficiente para transformar o erro em aprendizado.

Formato recomendado:

**✅ CORRETO**

**Justificativa:** explicação objetiva do conceito cobrado.

ou

**❌ INCORRETO**

**Justificativa:** explicação objetiva, indicando por que a alternativa escolhida está errada e qual conceito deve ser recuperado.

## 5. Navegação
O quiz deve funcionar **uma questão por vez**.

Fluxo:
`Questão → resposta → correção → justificativa → próxima questão`

Não apresentar todas as questões simultaneamente.

O botão de próxima questão permanece bloqueado até que o usuário responda.

Na última questão, o botão deve mudar para **Ver resultado**.

## 6. Resultado final
Ao terminar, apresentar:
- número de acertos;
- número total de questões;
- percentual;
- diagnóstico simples.

Referência atual:
- **100%:** domínio excelente;
- **80–99%:** ótimo desempenho;
- **60–79%:** bom desempenho, revisar erros;
- **<60%:** revisão recomendada antes de avançar.

O diagnóstico não substitui a análise pedagógica posterior.

## 7. Questões de concurso
Quando o usuário solicitar **questões reais**, devem ser preservados:
- banca;
- órgão/concurso;
- ano;
- enunciado;
- alternativas;
- gabarito;
- justificativa baseada na fonte disponível.

Quando houver adaptação, ela deve ser identificada como adaptação.

## 8. QTI
O comando oficial do projeto é:

`QTI-[X]`

Exemplos:
- `QTI-5`
- `QTI-10 — Aula 01`
- `QTI-20 — Banco de Dados — 11.1 a 11.5`
- `QTI-10 — questões reais Cesgranrio`

Todo QTI deve ser renderizado como **quiz interativo**, e não como uma lista Markdown de perguntas.

## 9. Requisitos de legibilidade
Prioridades:
1. contraste alto;
2. texto claro sobre fundos escuros;
3. tamanho de fonte confortável;
4. espaçamento adequado;
5. estados visuais inequívocos;
6. ausência de elementos decorativos que prejudiquem a leitura.

Evitar:
- texto cinza escuro;
- fundo azul predominante;
- bordas pouco visíveis;
- feedback com baixo contraste;
- excesso de cores;
- opções visualmente indistinguíveis.

## 10. Padrão de referência
O padrão atualmente aprovado é:

**fundo preto/grafite + cartões escuros + texto claro + verde para acerto + vermelho escuro para erro + azul apenas como destaque pontual.**

Este documento deve ser considerado a especificação visual de referência para novos QTI do projeto.