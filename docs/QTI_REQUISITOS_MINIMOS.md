# Requisitos Mínimos para Geração de QTI-[N]

## Objetivo

Este documento define os requisitos mínimos que todo QTI-[N] do projeto Concurso deve cumprir antes de ser considerado concluído.

O requisito abaixo é **obrigatório** para preservar a continuidade do estudo e permitir que o resultado do quiz seja incorporado ao histórico e ao `REGISTRO_ESTUDO.json`.

## 1. Resultado final obrigatoriamente copiável

Todo QTI-[N] deve terminar com um **resumo estruturado e copiável**, preferencialmente em JSON, apresentado diretamente na tela.

Não é suficiente armazenar o resultado apenas em `localStorage`, no navegador ou em qualquer estado interno do QTI.

O usuário precisa conseguir:

1. concluir o teste;
2. visualizar o resultado;
3. copiar o consolidado;
4. trazer o consolidado para o chat;
5. permitir o registro no histórico do estudo e no `REGISTRO_ESTUDO.json`.

### 1.1 Conteúdo mínimo do consolidado

O resumo final deve conter, no mínimo:

- `eventId`;
- `occurredAt`;
- `editalItem`;
- identificação do QTI;
- tema/unidade;
- total de questões;
- número de acertos;
- número de erros;
- percentual de acerto;
- tempo total;
- tempo médio;
- `sourceType`;
- `nextAction`;
- resultado individual de **cada questão**;
- tempo de resposta de **cada questão**;
- tipo de erro, quando aplicável;
- diagnóstico dos pontos que precisam de reparo.

Exemplo mínimo:

```json
{
  "eventId": "QTI5-MER-...",
  "occurredAt": "...",
  "qti": "QTI-5",
  "editalItem": "E4-11-02",
  "tema": "Modelo Entidade-Relacionamento",
  "total": 5,
  "acertos": 4,
  "erros": 1,
  "accuracy": 0.8,
  "tempoTotalSec": 120,
  "tempoMedioSec": 24,
  "sourceType": "MULTIBANCA_ADAPTADA",
  "nextAction": "RETESTE",
  "questionResults": [
    {
      "questionId": "QTI5-01",
      "result": "CORRETA",
      "responseTimeSec": 20,
      "errorType": null
    }
  ],
  "diagnostico": [
    "..."
  ]
}
```

## 2. Regra de persistência

`localStorage` pode continuar sendo utilizado para persistência local e continuidade da aplicação, mas **não substitui o consolidado copiável**.

O QTI deve sempre produzir uma saída explícita para integração com o histórico do projeto.

## 3. Integração com o sistema de aprendizagem

O resultado final deve ser suficiente para alimentar o fluxo:

`QTI → resultado → histórico → diagnóstico → REGISTRO_ESTUDO → agendamento → próximo estudo`

Um QTI que calcula a pontuação corretamente, mas não fornece o consolidado copiável, é considerado **incompleto** para o ambiente Concurso.

## 4. Diagnóstico

O resultado não deve limitar-se a `X/Y`.

Quando houver dados disponíveis, o consolidado deve preservar:

- assunto/unidade associado à questão;
- erro por questão;
- tipo de erro;
- confiança, quando coletada;
- tempo de resposta;
- próxima ação recomendada.

Isso permite distinguir, por exemplo:

- erro por desconhecimento;
- erro por interpretação;
- erro por chute;
- erro recorrente;
- dificuldade de transferência.

## 5. Compatibilidade com o padrão QTI

Este requisito complementa o padrão visual e comportamental definido em:

`docs/QTI_PADRAO_VISUAL_DARK.md`

e o motor em:

`qti/qti-engine.js`

O QTI continua obedecendo ao fluxo:

`questão → resposta → correção → justificativa → próxima → resultado`

mas o **resultado final também deve ser exportável/copiável** para o sistema de aprendizagem.

## 6. Critério de aceitação

Antes de entregar qualquer QTI-[N], verificar:

- [ ] Quiz interativo, uma questão por vez.
- [ ] Alternativas A–E clicáveis.
- [ ] Correção imediata.
- [ ] Explicação após cada resposta.
- [ ] Contador/progresso.
- [ ] Resultado final.
- [ ] Diagnóstico.
- [ ] **Consolidado/JSON copiável visível ao final.**
- [ ] Resultado individual por questão.
- [ ] Tempo por questão.
- [ ] Tipo de erro quando aplicável.
- [ ] `editalItem` identificado.
- [ ] Fonte/`sourceType` identificado.
- [ ] `nextAction` informado.

## Histórico da alteração

**2026-09-28** — Inclusão do requisito de consolidado final copiável após a execução de um QTI-5 de reparo. Foi identificado que armazenar o resultado apenas em `localStorage` não atende ao fluxo de registro do projeto.
