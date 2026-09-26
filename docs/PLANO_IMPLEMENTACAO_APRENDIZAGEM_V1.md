# Plano de Implementação — Sistema de Aprendizagem V1

## Estado

Arquitetura documental e registradores-base criados.

## Etapa A — Dados
- [x] especificação
- [x] registrador
- [x] unidades
- [x] questões
- [x] resultados
- [x] revisões
- [x] métricas
- [x] schema inicial

## Etapa B — Regras
- [x] estados
- [x] política de revisão
- [x] continuidade entre chats
- [x] integridade de evidência

## Etapa C — Motor
- [ ] ingestão de resultado QTI
- [ ] diagnóstico automático
- [ ] cálculo de prioridade
- [ ] cálculo de próxima revisão
- [ ] derivação de estado
- [ ] geração de sessão diária

## Etapa D — Interface
- [ ] QTI conectado ao registro
- [ ] dashboard
- [ ] fila de hoje
- [ ] histórico
- [ ] mapa de lacunas

## Etapa E — Conteúdo
- [ ] decomposição integral do edital
- [ ] indexação dos materiais
- [ ] indexação das questões reais
- [ ] associação questão → unidade

## Etapa F — Validação
- [ ] testes de consistência
- [ ] teste de persistência
- [ ] teste de não-invenção
- [ ] teste de overfitting
- [ ] validação das métricas

## Critério de conclusão

O sistema estará operacional quando uma sessão real puder alterar evidências, recalcular o estado e produzir uma nova fila de estudo reproduzível por qualquer chat.