<div align="center">
  <img src="https://i.imgur.com/BbGTXdO.png"/>
  <h1> GoBarber </h1>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/renanarantes/gobarber">
  <a href="https://www.linkedin.com/in/renan-m-arantes">
    <img src="https://img.shields.io/badge/made%20by-Renan%20Arantes-%222FFFee">
   </a>
   <a href="https://github.com/renanarantes/gobarber/stargazers">
    <img alt="stars gitHub" src="https://img.shields.io/github/stars/renanarantes/gobarber?style=social">
  </a>
</div>

<h4> O GoBarber é uma aplicação de delivery de serviços de barbearia feita durante o bootcamp <a href="https://rocketseat.com.br/gostack">GoStack</a> da <a href="https://rocketseat.com.br/"> Rocketseat </a>.</h4>

# Recuperacao de senha
**Requisitos funcionais**
- O usuario deve poder recuperar sua senha informando seu e-mail;
- O usuario deve receber um email com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**Requisitos nao funcionais**
- Utilizar Mailtrap para testar envios de emails em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios de emails em producao;
- O envio de emails deve acontecer em segundo plano(background job);

**Regras de negocios**
- O link enviado por email para resetar senha deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualizacao do perfil

**Requisitos funcionais**
- O usuario deve poder atualizar seu nome, email e senha;

**Requisitos nao funcionais**

**Regras de negocio**
- O usuario nao pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha o usuario deve informar a senha antiga;
- Para atualizar sua senha o usuario precisa confirmar a nova senha;

# Painel do prestador

**Requisitos funcionais**
- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacoes nao lidas;

**Requisitos nao funcionais**
- Os agendamentos do prestador no dia devem poder ser agendamentos em cache;
- As notificacoes do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviadas em tempo real utilizando socket.io;

**Regras de negocio**
- A notificacao deve ter um status de lida ou nao-lida para que o prestador possa controlar;


# Agendamento de servicos

**Requisitos funcionais**
- O usuario deve poder listar todos os prestadores de servicos cadastrados;
- O usuario deve poder listar os dias de um mes com pelo menos horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;


**Requisitos nao funcionais**
- A listagem de prestadores deve ser armazenada em chache;

**Regras de negocio**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18h(Primeiro as 8h, ultimo as 17h);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- O usuario nao pode agendar servicos consigo mesmo;

-
