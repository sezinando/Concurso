# QTI — Motor de Quiz Interativo

Este diretório contém o primeiro motor executável do QTI do projeto Concurso.

## Objetivo

Transformar o padrão documentado em `docs/QTI_PADRAO_VISUAL_DARK.md` em um componente realmente interativo:

`questão → resposta → correção → justificativa → próxima → resultado`

## Estrutura

- `index.html` — página de execução/demonstração.
- `qti.css` — tema Dark Mode aprovado.
- `qti-engine.js` — motor de estado, navegação, correção, pontuação e diagnóstico.
- `questions.example.js` — exemplo mínimo do contrato de dados.

## Contrato de dados

O motor recebe:

```js
QTI.start({
  title: "QTI-10 — Aula 01",
  questions: [
    {
      id: 1,
      source: "Cesgranrio 2025",
      topic: "11.1 Independência de dados",
      question: "Enunciado...",
      options: {
        A: "Alternativa A",
        B: "Alternativa B",
        C: "Alternativa C",
        D: "Alternativa D",
        E: "Alternativa E"
      },
      answer: "B",
      explanation: "Justificativa..."
    }
  ]
});
```

## Regras implementadas

- Uma questão por vez.
- A–E clicáveis.
- Seleção e foco em azul.
- Correta em verde.
- Incorreta em vermelho escuro.
- Correção imediata.
- Alternativas bloqueadas após resposta.
- Justificativa imediata.
- Próxima questão bloqueada até responder.
- Última questão → resultado.
- Percentual e diagnóstico.
- Identificação dos assuntos errados quando `topic` estiver preenchido.
- Refazer QTI.

## Integração futura com o sistema Concurso

O gerador de questões deve produzir o objeto acima e chamar:

```js
QTI.start(config);
```

O motor deliberadamente não conhece Transpetro, Cesgranrio ou qualquer disciplina. A seleção das questões pertence à camada de conteúdo.

### Fluxo recomendado

```
QTI-10
   ↓
interpretador do comando
   ↓
filtro de conteúdo
   ↓
seleção de questões
   ↓
objeto QTI
   ↓
QTI Engine
   ↓
resultado + diagnóstico
```

Assim, o mesmo motor pode atender Banco de Dados, Redes, Sistemas Operacionais, Arquitetura de Computadores e demais disciplinas.

## Observação

O motor é uma camada de apresentação/execução. Ele não deve alterar enunciados ou alternativas de questões reais. Adaptações devem ser marcadas como adaptações na camada de conteúdo.
