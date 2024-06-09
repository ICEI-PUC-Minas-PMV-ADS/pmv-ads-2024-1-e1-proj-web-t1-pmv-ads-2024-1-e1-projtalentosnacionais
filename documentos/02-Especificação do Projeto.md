# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil: Profissional  </tr>
</tr>
<tr>
<td width="150px"><b> Descrição.</b></td>
<td width="600px">Profissional que busca divulgar seu portfólio de trabalho, visando a obtenção de vagas de emprego e oportunidades de trabalho.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1 - Divulgar seu portfólio de trabalho, destacando suas habilidades e competências. 
  
2 - Site que ofereça oportunidades de trabalho baseado em sua experiências.

3 - Políticas de segurança de dados e proteção contra hackers.

4- Campo interativo em que é possível receber feedback de empresas recrutadoras.

5 - Link para redes sociais.

6 - Receber referências, carta de recomendação e indicações de outros usuários/profissionais.

7 - Perfil da empresa contratante e das condições da vaga. 
  
</td>
</tr>
  
<table>
<tbody>
<tr align=center>
<th colspan="3">Perfil: Empresa </tr>
</tr>
<tr>
<td width="150px"><b> Descrição.</b></td>
<td width="600px">Empresa que está em busca de profissionais para contratação.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>
1- Otimizar e agilizar o processo de busca de profissionais para contratação.
2- Conhecer melhor as habilidades e competências do candidato a vaga.
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários

As histórias de usuário podem ser visualizadas de acordo com a tabela a seguir: 


|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Profissional       | Que o cadastro de conta seja fácil e gratuito.| Otimizar a experiência do usuário facilitando o seu cadastro.|
| Profissional       | Que o site facilite a busca por empresas em busca de portifólio.| Otimizar o tempo de busca por vagas.|
| Profissional       | Ter oportunidade de fazer Networking.| Expandir as oportunidades de trabalho|
| Profissional       | Compartilhar dentro do site habilidades e trabalhos por meio de vídeos, arquivos em PDF e não somente através de textos.|Apenas a exibição do currículo em texto não é suficiente para demonstrar e valorizar as habilidades e competências.|
| Profissional       | Que o site adote políticas e sistemas para segurança de seus usuários|Garantir que seu trabalho não seja plagiado ou tenha sua conta invadida.|
| Empresa Recrutadora| Encontrar profissionais com as qualificações técnicas e perfil comportamental que atendas as necessidades das empresas|Realizar o recrutamento e seleção de novos profissionais, tendo como referência as suas habilidades técnicas e comportamentais para o preenchimento das vagas| 
| Empresa Recrutadora| Encontrar formas de acesso às qualificações dos profissionais além da simples leitura do currículo.| Permitir o conhecimento sobre as habilidades e perfil do profissional de forma rápida e acessível.|

## Requisitos do Projeto

Com base nas Histórias de Usuários, foram elaborados requisitos de solução: 

### Requisitos Funcionais


|  ID     | Descrição                       | Prioridade |
|-------|---------------------------------|----        |
| RF-01  |  A aplicação deve permitir ao usuário criar uma conta com login e senha.| Alta| 
| RF-02  |  A aplicação deve permitir ao usuário buscar por vagas.| Alta|
| RF-03  |  A aplicação deve permitir ao usuário inserir vídeos de 2 minutos e arquivos em PDF.| Alta|
| RF-04  | A  aplicação deve permitir a empresa cadastrar e fazer login como empresa. | Alta|
| RF-05  | A aplicação deve permitir ao profissional cadastrar seu currículo.| Alta|
| RF-06  | A aplicação deve permitir às empresas entrar em contato com o usuário, por e-mail, permitindo a comunicação entre os dois sobre vagas, assim como dar feedback sobre o perfil do profissional.| Alta|
| RF-07  | A aplicação deve possuir links para redes sociais do profissional cadastrado. |Baixa |
| RF-08  | O perfil do profissional deve possuir um sistema de ranking que será medido pela qualidade das indicações e boas referências.|  Baixa|
| RF-09  | A aplicação deve permitir as empresas ofertar vagas para os profissionais.| Alta|
| RF-10  | A aplicação deve possuir um sistema de busca/pesquisa, permitindo às empresas encontrar profissionais por meio de filtros específicos.| Alta|
| RF-11  | A aplicação deve possuir um sistema de cancelar conta, permitindo o usuário cancelar o seu perfil.| Alta|
|RF-12   | A aplicação deve possuir um sistema que permite o usuario ter acesso as outras paginas do site. | Alta|


**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais


| ID     | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | O site deve ser compatível com os principais navegadores de internet: Chrome, Firefox, Safari, Edge.| Alta  | 
| RNF-02 | A aplicação deve permitir a visualização em diversos tipos de dispositivos.| Alta  |
| RNF-03 | A aplicação deve obedecer a LGPD, possuir mecanismos de proteção de dados e segurança cibernética.| Alta |

**Prioridade: Alta / Média / Baixa. 

