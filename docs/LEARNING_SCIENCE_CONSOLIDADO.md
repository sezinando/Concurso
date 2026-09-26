# Learning Science — Consolidado para Preparação de Concursos e Certificações

> Versão: 1.0
> Data: 2026-09-26
> Projeto: Concurso Transpetro 2026 — Ênfase 4: Análise de Sistemas — Infraestrutura

## 1. Finalidade

Este documento transforma pesquisa internacional sobre aprendizagem em regras operacionais para o projeto Concurso.

Objetivos:
- aumentar retenção de longo prazo;
- reduzir estudo passivo de baixa eficiência;
- transformar questões em instrumentos de aprendizagem e diagnóstico;
- separar cobertura do edital de domínio real;
- detectar ilusões de competência;
- adaptar revisão ao desempenho observado;
- criar uma base comum para todos os chats e futuros componentes.

## 2. Princípio central

**Aprender → Recuperar → Testar → Corrigir → Espaçar → Misturar → Simular → Medir → Reaprender**

A literatura dá suporte especialmente a retrieval practice, spaced/distributed practice, feedback, successive relearning, interleaving em tarefas que exigem discriminação, worked examples para aprendizes iniciantes, metacognição/autorregulação e prática deliberada com objetivos específicos.

Nenhuma técnica isolada garante desempenho. O efeito depende do tipo de conteúdo, estágio do conhecimento, formato da prova, qualidade das questões e desenho do sistema.

## 3. Hierarquia de evidência

### Nível A — Evidência experimental/meta-analítica
Usar para definir regras do motor de estudo: retrieval practice, spacing, feedback, successive relearning, interleaving quando aplicável e worked examples para novatos.

### Nível B — Evidência educacional aplicada
Usar para adaptar as regras a situações reais: sala de aula, múltiplos domínios, autorregulação e metacognição.

### Nível C — Prática de comunidades
Concursos, Anki/SuperMemo, certificações de TI, estudo reverso, caderno de erros e planilhas. Usar para identificar práticas e problemas, não para estabelecer causalidade.

## 4. Retrieval Practice

### Definição
Recuperar conhecimento da memória sem consultar a fonte.

### Evidência
Roediger & Karpicke mostraram que testes de memória podem melhorar retenção posterior, e não apenas medi-la. Em seus experimentos, repetido estudo elevou confiança, mas testes prévios favoreceram retenção em avaliações atrasadas.

Uma revisão aplicada de Agarwal, Nunes & Blunt examinou quase 2.000 abstracts, 50 experimentos e 5.374 participantes; a maioria dos experimentos mostrou benefícios médios ou grandes da prática de recuperação.

### Regra operacional
1. Fechar o material.
2. Reconstruir os conceitos.
3. Responder questões.
4. Verificar.
5. Corrigir.
6. Retestar posteriormente.

## 5. Feedback

Feedback de qualidade deve responder: o que estava certo, o que estava errado, por quê, qual conceito estava sendo testado e como reconhecer o mesmo padrão depois.

Uma meta-análise de 435 estudos, 994 estimativas e mais de 61 mil participantes encontrou efeito médio de feedback, com heterogeneidade importante e forte influência do conteúdo informacional.

### Regra
“Errado” isoladamente é insuficiente.

Registrar: alternativa escolhida, gabarito, explicação, tópico, tipo de erro e próxima ação.

## 6. Spaced Practice

Distribuir exposições e recuperações ao longo do tempo. Não tratar uma sequência fixa como lei biológica.

### Política inicial
- erro → intervalo menor;
- acerto inseguro → intervalo curto/moderado;
- acerto estável → intervalo maior;
- falha no reteste → reduzir intervalo;
- sucesso repetido → ampliar intervalo.

A pesquisa sobre intervalos expansivos mostra que não há superioridade universal de um cronograma expansivo no teste final; o objetivo operacional é manter alta recuperabilidade durante todo o treinamento.

## 7. Successive Relearning

Combina recuperação até acerto com nova recuperação em sessões espaçadas.

### Regra
Acertar uma vez não fecha o conteúdo. Uma unidade deve ser recuperada novamente em sessões posteriores.

## 8. Interleaving

Misturar categorias/conceitos para exigir discriminação sobre qual regra utilizar.

### Aplicar quando
- conceitos são semelhantes;
- há risco de confusão;
- há famílias de questões;
- existem relações entre tópicos.

### Evitar no início de conteúdo complexo
Primeiro construir estrutura mínima; depois misturar.

## 9. Worked Examples e Carga Cognitiva

Para iniciantes, exemplos resolvidos podem reduzir processamento improdutivo em domínios complexos e ajudar a formar esquemas.

### Progressão
**explicação → exemplo resolvido → exercício guiado → recuperação independente → questão nova**

## 10. Metacognição

A sensação de facilidade não é medida suficiente de aprendizagem. A literatura mostra que julgamentos de aprendizagem podem usar fluência de processamento como pista.

### Medir
- desempenho;
- confiança;
- tempo;
- retenção atrasada;
- transferência.

## 11. Autoexplicação

Self-explanation pode ajudar compreensão e transferência, mas o benefício depende da tarefa.

### Uso
Após questão difícil, explicar: por que a correta é correta, por que a escolhida estava errada e qual regra resolve o caso.

## 12. Prática deliberada

Prática deliberada não é acumular horas. É treinar uma competência específica, receber feedback e tentar novamente.

Trocar “estudar Redes” por “corrigir a dificuldade em diferenciar controle de fluxo e congestionamento em questões de nível médio”.

## 13. Questões como instrumento de aprendizagem

Comunidades de concursos usam estudo por questões, caderno de erros, revisão por questões, estudo reverso, Anki e planilhas de revisão. Isso é compatível com retrieval practice quando a questão é analisada e não apenas contada.

### Regra
Questão certa não equivale automaticamente a domínio.

Registrar: confiança, chute, tempo, dificuldade, explicação e reincidência.

## 14. Estados de conhecimento

`NAO_INICIADO`
`EM_ESTUDO`
`ESTUDADO`
`INSTAVEL`
`REVISAO`
`CONSOLIDADO`

Estado adicional possível: `TRANSFERENCIA_NAO_COMPROVADA`.

## 15. Métricas

### Cobertura
`conteúdo concluído / conteúdo total × 100`

### Domínio
`unidades dominadas / unidades estudadas × 100`

### Retenção
Desempenho em retestes atrasados.

### Transferência
Desempenho em questões com contexto ou forma diferentes, preservando a mesma estrutura conceitual.

### Confiança calibrada
Comparar confiança declarada com acurácia real.

### Erro reincidente
Número de vezes em que o mesmo conceito é perdido.

O atual índice operacional de 60% Cobertura + 40% Domínio continua válido como indicador interno; não é uma medida científica nem previsão de aprovação.

## 16. Proposta: Índice de Domínio Cognitivo (IDC)

Indicador interno futuro, não validado psicometricamente, combinando:
- acurácia;
- retenção;
- transferência;
- confiança calibrada;
- velocidade;
- dificuldade;
- reincidência de erro.

## 17. Proposta: Eficiência de Aprendizagem

Medir ganho observado por unidade de tempo:
`ganho de domínio / minutos investidos`

Objetivo: descobrir conteúdos que consomem tempo sem aumento proporcional de domínio.

## 18. Arquitetura adaptativa

### Nível 1 — Aquisição
Teoria curta e estruturada.

### Nível 2 — Recuperação
Perguntas sem consulta.

### Nível 3 — Aplicação
Questões da banca.

### Nível 4 — Diagnóstico
Classificação do erro.

### Nível 5 — Consolidação
Reteste espaçado.

### Nível 6 — Integração
Interleaving.

### Nível 7 — Simulação
Condições próximas às da prova.

## 19. Regra de progressão

Não considerar conteúdo dominado por uma única evidência.

Mínimo recomendado:
- recuperação independente adequada;
- aplicação correta;
- pelo menos um reteste atrasado;
- ausência de erro recorrente relevante.

## 20. Regra de revisão

Prioridade combina:
- baixo domínio;
- baixa retenção;
- relevância no edital;
- valor de transferência;
- erro reincidente.

Não usar apenas “tempo desde o último estudo”.

## 21. Tempo

Registrar minutos líquidos, unidades estudadas, recuperações, questões, acertos, erros corrigidos, retestes vencidos e mudanças de estado.

## 22. Material

PDF, vídeo, resumo, mapa e aula servem principalmente para compreensão, referência e reparo de lacunas. Nenhum substitui recuperação e prática.

## 23. Flashcards

Usar para fatos discretos, definições, distinções, listas curtas e regras que exigem recuperação exata.

Evitar cartões gigantes e copiar páginas inteiras.

## 24. Caderno de erros

Transformar o caderno em banco de diagnóstico:
- conceito;
- causa;
- correção;
- questão de origem;
- questão análoga;
- reteste;
- estado.

## 25. QTI

O projeto já possui um motor de quiz com questão → resposta → correção → justificativa → próxima → resultado.

A evolução desejada é registrar confiança, tempo de resposta, tipo de erro, dificuldade, retenção e transferência.

## 26. Estratégia por maturidade

### Iniciante
Mais explicação, exemplos e orientação.

### Intermediário
Menos teoria; mais recuperação e questões.

### Avançado
Questões primeiro; teoria para reparar lacunas.

### Pré-prova
Simulação, diagnóstico, recuperação e revisão adaptativa.

## 27. Saúde cognitiva

Exercício físico e sono devem ser tratados como fatores de suporte ao funcionamento cognitivo, não como técnicas específicas de aprovação.

## 28. O que evitar

- releitura como núcleo;
- resumos longos como destino;
- excesso de grifos;
- questão sem análise;
- percentual bruto como domínio;
- revisão fixa independente do desempenho;
- confundir familiaridade com recuperação;
- produzir flashcards indiscriminadamente;
- medir apenas horas.

## 29. Protocolo diário

**revisões pendentes → conteúdo novo → retrieval → questões → feedback → diagnóstico → agendamento → log**

## 30. Protocolo semanal

Verificar cobertura, domínio, retenção, erros reincidentes, baixa confiança, redistribuir tempo e executar simulado misto.

## 31. Pós-simulado

**simulado → análise item a item → causa do erro → microrevisão → questão análoga → reteste**

## 32. Conexão com Transpetro

Cada item do edital deve ser decomposto em competências observáveis.

Exemplo: `11.2 Modelo ER` → reconhecer entidade → reconhecer atributo → reconhecer identificador → reconhecer cardinalidade → reconhecer participação → distinguir entidade forte/fraca → aplicar em questão.

## 33. Governança do conhecimento

Todo novo conhecimento do projeto deve ser rotulado como:
- `EVIDÊNCIA`
- `PRÁTICA`
- `HIPÓTESE`
- `MÉTRICA`
- `DECISÃO`

Isso evita misturar achados acadêmicos com preferências operacionais.

## 34. Regra de ouro

> Não medir quanto tempo o estudante ficou exposto ao conteúdo; medir o que ele consegue recuperar, aplicar e reter depois da exposição.
