# Registrador de Estudo

Este diretório contém o estado longitudinal do sistema de aprendizagem.

## Fonte principal

`REGISTRO_ESTUDO.json`

O arquivo não deve ser usado para "adivinhar" desempenho. Ele registra apenas evidências observadas.

## Fluxo

`estudo → recuperação → questão → correção → diagnóstico → revisão → reteste`

## Uso por qualquer chat

Antes de recomendar a sessão do dia, o chat deve:

1. ler o registrador;
2. localizar revisões vencidas;
3. localizar erros/instabilidades;
4. localizar conteúdo novo elegível;
5. selecionar questões compatíveis;
6. propor a sessão;
7. após o usuário responder, registrar o evento/resultados;
8. recalcular o próximo reteste.

## Regra crítica

Uma questão só entra como respondida quando houver resposta efetivamente registrada.

Uma unidade só pode ser marcada como CONSOLIDADA quando houver evidência suficiente conforme a especificação do sistema.

## Arquivos futuros

- `EDITAL.json` — estrutura completa do edital;
- `UNIDADES.json` — decomposição em competências observáveis;
- `QUESTOES.json` — banco indexado;
- `RESULTADOS.json` — resultados de questões;
- `REVISOES.json` — fila/agendamento;
- `METRICAS.json` — métricas derivadas.

O objetivo é que o repositório seja a memória longitudinal compartilhada entre chats.
