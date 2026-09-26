# Testes do Learning Engine V1

Os testes abaixo são cenários de comportamento, não resultados do usuário.

## T1 — sem evidência
Entrada: unidade sem eventos/resultados.
Esperado: NAO_INICIADO.

## T2 — estudo sem questão
Entrada: evento study, sem questionResult.
Esperado: EM_ESTUDO.

## T3 — erro inicial
Entrada: questão incorreta.
Esperado: INSTAVEL e revisão curta.

## T4 — acerto inseguro
Entrada: acerto com confiança 1–2.
Esperado: evidência positiva, mas prioridade de revisão permanece elevada.

## T5 — reteste falho
Entrada: reteste incorreto.
Esperado: REVISAO.

## T6 — consolidação
Entrada: aplicação correta + reteste atrasado correto + múltiplas evidências.
Esperado: CONSOLIDADO.

## T7 — transferência não comprovada
Entrada: desempenho bom em questões semelhantes, sem evidência de contexto novo.
Esperado: não declarar transferência como comprovada.

## T8 — integridade
Questão não respondida não pode aparecer em questionResults.

## T9 — dados ausentes
Confidence, retention ou transfer ausentes devem permanecer null, nunca ser substituídos silenciosamente por zero.

## Observação
A implementação atual é V1. Os limiares operacionais são parâmetros do sistema e devem ser revisados à medida que acumulamos dados longitudinais. Eles não são apresentados como leis científicas universais.