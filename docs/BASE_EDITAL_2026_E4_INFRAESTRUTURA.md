# Base Consolidada — Edital Transpetro 2026 — Ênfase 4: Análise de Sistemas – Infraestrutura

**Status:** BASE NORMATIVA DO PROJETO  
**Versão:** 1.0  
**Atualização:** 2026-09-28  
**Edital:** Edital nº 04 – TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR – 2026.4, de 11 de agosto de 2026, com alterações incluídas no próprio documento.  
**Fonte primária arquivada no Projeto:** `Edital Transpetro 2026(1).pdf`  
**Repositório:** `sezinando/Concurso`

> Esta documentação separa deliberadamente **conteúdo oficial do edital** de **mapeamento operacional de estudos**. Prioridades, diagnósticos e decisões de estudo não devem ser tratados como texto oficial da banca.

## 1. Estrutura da prova aplicável à Ênfase 4

Para as ênfases abrangidas pelo item 7.1, a 1ª etapa é composta por:
- **Conhecimentos Específicos:** 50 questões;
- **Conhecimentos Gerais:** 20 questões;
  - Língua Portuguesa: 10;
  - Língua Inglesa: 10;
- **Total:** 70 questões objetivas;
- cada questão possui cinco alternativas (A–E) e uma única resposta correta.

O edital estabelece que Conhecimentos Específicos e Conhecimentos Gerais têm caráter eliminatório e classificatório, observados os critérios do edital.

## 2. Conhecimentos Básicos

### Língua Portuguesa
1. Compreensão de textos.
2. Ortografia oficial.
3. Mecanismos de coesão textual.
4. Significação das palavras.
5. Emprego de tempos e modos verbais.
6. Emprego das classes de palavras.
7. Coordenação e de subordinação.
8. Emprego dos sinais de pontuação.
9. Concordância verbal e nominal.
10. Regência verbal e nominal.
11. Emprego do sinal indicativo de crase.
12. Colocação dos pronomes átonos.

### Língua Inglesa
1. Compreensão de texto escrito em língua inglesa.
2. Itens gramaticais relevantes para a compreensão dos conteúdos semânticos.

## 3. Conhecimentos Específicos — Ênfase 4

### 1. Redes de Computadores e Sistemas Distribuídos
**1.1** Arquiteturas de rede; Topologias; Equipamentos de conexão e transmissão; QoS; Modelo OSI da ISO; Arquitetura e protocolos TCP/IP; Nível de aplicação TCP/IP: DNS, FTP, NFS, TELNET, SMTP, HTTP, LDAP, DHCP, IPSEC, SSH, SNMP e NAT; Noções básicas de IPv6.

**Unidades de estudo do projeto:** `E4-1-01`.

**Mapa operacional:** OSI/TCP-IP, topologias, equipamentos, QoS, funções dos protocolos, DNS/DHCP, NAT, IPv6, SSH/IPsec/SNMP e relações entre protocolos.

---

### 2. Ambiente UNIX e LINUX
**2.1** Instalação e suporte a TCP/IP, DHCP, DNS, NIS, CIFS, NFS, serviços de impressão em rede.  
**2.2** Instalação e configuração do Servidor Apache.  
**2.3** Integração com ambiente Windows, Linguagens de Script.

**Unidades:** `E4-2-01`, `E4-2-02`, `E4-2-03`.

**Mapa operacional:** administração Linux, filesystem/permissões, usuários/grupos, processos/serviços, systemd, rede, DNS/DHCP, NFS/CIFS/Samba, Apache e shell scripting.

---

### 3. Ambiente Microsoft Windows 11
**3.1** Instalação e suporte de TCP/IP, DHCP, DNS.  
**3.2** Active Directory, IIS, Terminal Services.  
**3.3** Serviços de arquivo e impressão em rede.  
**3.4** Integração com ambiente Unix.  
**3.5** Linguagens de Script.

**Unidades:** `E4-3-01` a `E4-3-05`.

**Mapa operacional:** Active Directory, Domain Controller, OU/GPO, DNS integrado ao AD, Kerberos/LDAP, IIS, serviços de administração, PowerShell/scripting e integração Unix/Windows.

---

### 4. Gerência de Projeto
**4.1** Gerenciamento do ciclo de vida do sistema: determinação dos requisitos, projeto lógico, projeto físico, teste, implementação.  
**4.2** O conceito e os objetivos da gerência de projetos.  
**4.3** Abertura e definição do escopo de um projeto.  
**4.4** Planejamento de um projeto.  
**4.5** Diagrama de Rede, Caminho Crítico, Folgas, Estrutura Analítica do Projeto.  
**4.6** Execução, acompanhamento e controle de um projeto.  
**4.7** Revisão e avaliação de um projeto.  
**4.8** Fechamento de um projeto.  
**4.9** Metodologias, técnicas e ferramentas da gerência de projetos.

**Unidades:** `E4-4-01` a `E4-4-09`.

**Mapa operacional:** requisitos, ciclo de vida, escopo, planejamento, EAP, redes de precedência, caminho crítico, folgas, execução, controle, revisão, fechamento e metodologias.

---

### 5. Segurança da Informação
**5.1** Segurança física e lógica.  
**5.2** Operação de segurança (Firewall, Proxy, IPS/IDS, DLP, CASB, SIEM, Antivírus, EDR, WAF, Gestão de vulnerabilidades, Monitoração, Backup).  
**5.3** Softwares maliciosos (ransomware, vírus, worms, spywares, rootkit etc.).  
**5.4** Ataques (DDoS, SQL Injection, XSS, CSRF, Path Traversal etc.).  
**5.5** Técnicas de desenvolvimento seguro, SAST/DAST/IAST.  
**5.6** VPN.  
**5.7** MDM.  
**5.8** SSO.  
**5.9** MFA.  
**5.10** Gestão de Identidade e acesso (autenticação, autorização e auditoria), RBAC e ABAC.

**Unidades:** `E4-5-01` a `E4-5-10`.

**Mapa operacional:** controles de segurança, defesa em profundidade, SOC/SIEM/EDR, AppSec, vulnerabilidades, malware, ataques web, VPN, MDM, SSO/MFA, IAM, RBAC/ABAC e backup.

---

### 6. Conceitos de Storage (NAS e SAN) e Virtualização
**6.1** Introdução à virtualização.  
**6.2** Formas de virtualização.  
**6.3** Virtualização de computação.  
**6.4** Virtualização de rede.  
**6.5** Virtualização de armazenamento: Sistemas virtuais de arquivos, sistemas distribuídos, tecnologias.

**Mapa operacional:** NAS × SAN, file/block, virtualização de compute/network/storage, sistemas virtuais de arquivos e sistemas distribuídos.

---

### 7. Arquitetura de Computadores e Computação de Alto Desempenho
**7.1** Conceitos de concorrência, paralelismo e computação distribuída.  
**7.2** Conceitos básicos de computação em aglomerados (Cluster) e de computação em grades (Grids).  
**7.3** Balanceamento de carga.  
**7.4** Avaliação de desempenho.  
**7.5** DevOps: Princípios e Modelos.  
**7.6** Contêineres: Introdução e principais tecnologias de contêiner.  
**7.7** Virtualização a nível de sistema operacional.  
**7.8** Diferença entre a virtualização dos contêineres e os outros tipos de virtualização.  
**7.9** Modos de utilização de um container.  
**7.10** Microsserviços: Conceitos básicos de microsserviços, arquitetura, componentes de serviços, serviços e orquestração.  
**7.11** Infraestrutura como código.

**Mapa operacional:** concorrência/paralelismo, cluster/grid, balanceamento, métricas de desempenho, DevOps, containers, namespaces/cgroups em nível conceitual, microsserviços, orquestração e IaC.

---

### 8. Computação em Nuvem
**8.1** Conceitos de computação em nuvem: benefícios, alta disponibilidade, escalabilidade, elasticidade, agilidade, recuperação de desastres.  
**8.2** Componentes centrais da arquitetura em nuvem: distribuição geográfica, regiões, zonas de disponibilidade, subscrições, grupos de gestão, recursos.  
**8.3** Características gerais de identidade, privacidade, conformidade e segurança na nuvem.  
**8.4** Gestão de custos na nuvem: modelos de faturamento, gerenciamento de subscrições e contas, definição de preço.

**Mapa operacional:** IaaS/PaaS/SaaS como apoio conceitual, region/AZ, HA/DR, escalabilidade/elasticidade, identidade, segurança, governança e billing/pricing.

---

### 9. Gerenciamento de Serviços de TI
**9.1** Fundamentos em Gerenciamento de Serviços segundo ITIL® versão 4: Ciclo de Vida de Serviços.  
**9.2** Processos de Transição e Operação de Serviços.  
**9.3** Domínio dos processos COBIT 4.1 (processos do domínio Entrega de Serviço).

**Mapa operacional:** fundamentos ITIL 4, serviço, transição, operação e terminologia de COBIT 4.1 — Entrega de Serviço.

---

### 10. Segurança da Informação
**10.1** Conceitos gerais: Gerenciamento de resposta a incidente (NIST SP 800-61).  
**10.2** Threat intel, threat hunting.  
**10.3** Testes de penetração; Modelagem de ameaças (STRIDE etc.).  
**10.4** Conhecimento das Táticas do framework Mitre ATT&CK.  
**10.5** Gestão de riscos (ISO 31000), Gestão de Continuidade de Negócios (ISO 22301) e Lei Sarbannes-Oxley.  
**10.6** Políticas de Segurança de Informação.  
**10.7** Classificação de informações.  
**10.8** Norma ISO 27002, Criptografia, certificação digital e assinatura digital.  
**10.9** Conceitos de segurança em nuvem.  
**10.10** Segurança em IoT.

**Mapa operacional:** incident response, threat intelligence/hunting, pentest, STRIDE, MITRE ATT&CK, risco, continuidade, políticas, classificação, ISO 27002, criptografia, certificação/assinatura digital, cloud security e IoT.

> **Importante:** os itens 5 e 10 são ambos intitulados Segurança da Informação, mas são blocos distintos do edital e devem permanecer separados no registro e no diagnóstico.

---

### 11. Banco de Dados
**11.1** Independência de dados.  
**11.2** A abordagem entidade-relacionamento.  
**11.3** O modelo Relacional.  
**11.4** Gatilhos (triggers) e Procedimentos Armazenados (stored procedures).  
**11.5** A linguagem SQL.  
**11.6** Conceitos de alta disponibilidade.  
**11.7** Gerência de transações.  
**11.8** Gerência de bloqueios.  
**11.9** Gerência de desempenho.

**Mapa operacional:** ANSI/SPARC e independência, modelo ER, entidades/relacionamentos/cardinalidade/participação, modelo relacional, chaves/integridade, SQL, triggers, procedures, ACID/transações, bloqueios/concurrency, alta disponibilidade e performance.

**Evidência atual relevante:** o registro do projeto possui múltiplas avaliações em `11.2`, com evidência recente de necessidade de reparo/reteste. O estado de aprendizagem deve ser consultado no `data/REGISTRO_ESTUDO.json`, e não inferido apenas deste documento.

---

### 12. Programação
**12.1** Algoritmos e estruturas de dados.  
**12.2** Noções de engenharia de software.  
**12.3** Linguagem de marcação: HTML e XML.  
**12.4** Programação básica em Java (objetos, classes, herança, polimorfismo, interfaces e principais bibliotecas).  
**12.5** Noções de programação J2EE, Servelets, JSP e EJB.

**Mapa operacional:** algoritmos, estruturas de dados, fundamentos de engenharia de software, HTML/XML, orientação a objetos em Java e visão conceitual de J2EE/Servlets/JSP/EJB.

---

### 13. Raciocínio Lógico
**13.1** Sentido lógico-matemático convencional dos conectivos.  
**13.2** Argumentos.  
**13.3** A lógica sentencial.  
**13.4** A lógica de predicados de primeira ordem.  
**13.5** Regras de formação de fórmulas.  
**13.6** Sistemas dedutivos.  
**13.7** Decidibilidade da lógica sentencial.  
**13.8** Valores-verdade.  
**13.9** Funções de avaliação.

**Mapa operacional:** conectivos, argumentos, proposições, predicados, formação de fórmulas, dedução, decidibilidade, tabelas/valores-verdade e funções de avaliação.

## 4. Integração com o sistema de estudos

A base oficial deve ser tratada como a camada **normativa**. O sistema de aprendizagem acrescenta, separadamente:

1. **Edital** — o que pode ser cobrado.
2. **UNIDADES.json** — decomposição operacional.
3. **REGISTRO_ESTUDO.json** — evidência real de estudo e desempenho.
4. **Materiais** — aulas, PDFs e outras fontes de aprendizagem.
5. **QTI** — evidência de recuperação/aplicação.
6. **Orquestrador** — decisão de reparo, reteste, espaçamento, transferência ou avanço.

### Regra de integridade

> **Nunca inventar resultados. Ausência de evidência permanece null.**

Prioridades estratégicas, diagnóstico de domínio e recomendações de estudo devem ser alteráveis conforme novas evidências. O texto do edital, por outro lado, deve permanecer rastreável à fonte oficial.

## 5. Conteúdo de interesse já desenvolvido no projeto

O projeto já possui material operacional associado à Ênfase 4, incluindo:
- matriz de estudos;
- decomposição do edital em unidades;
- apostila/matriz de Infraestrutura;
- materiais de Português;
- materiais e estudos de Banco de Dados;
- registro de evidências QTI;
- especificação canônica do QTI;
- documentação de Learning Science;
- fila de revisão e diagnóstico.

### Relação com a aprendizagem atual

O item **11.2 — abordagem entidade-relacionamento** já possui evidência de aprendizagem registrada. As últimas avaliações demonstraram que acerto isolado não deve ser tratado como domínio consolidado; o estado atual do registro aponta necessidade de reparo/reteste em aspectos como participação total/parcial e integração entre cardinalidade e entidade associativa.

## 6. Regra para outros chats

Ao iniciar uma nova pesquisa ou estudo da Ênfase 4:

1. consultar esta base para o **escopo oficial**;
2. consultar `data/REGISTRO_ESTUDO.json` para o **estado de aprendizagem**;
3. consultar `data/UNIDADES.json` para a **unidade operacional**;
4. consultar os documentos de disciplina para o **material de estudo**;
5. não substituir evidência registrada por estimativa;
6. ao gerar QTI, seguir obrigatoriamente `docs/QTI_ESPECIFICACAO_CANONICA.md`.

## 7. Fontes

- Edital nº 04 – TRANSPETRO/PSP/TERRA/NÍVEL SUPERIOR – 2026.4, de 11/08/2026, com alterações incluídas no documento arquivado.
- Fundação Cesgranrio / Transpetro — edital e comunicados oficiais.
- Cópia arquivada no Projeto: `Edital Transpetro 2026(1).pdf`.

**Observação de rastreabilidade:** esta documentação não substitui o edital oficial. Ela funciona como uma camada consolidada de referência para o sistema de estudos.
