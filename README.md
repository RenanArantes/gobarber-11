<div align="center">
  <img src="https://i.imgur.com/BbGTXdO.png"/>
  <h1> GoBarber </h1>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/renanarantes/gobarber-11">
  <a href="https://www.linkedin.com/in/renan-m-arantes">
    <img src="https://img.shields.io/badge/made%20by-Renan%20Arantes-%222FFFee">
   </a>
   <a href="https://github.com/renanarantes/gobarber/stargazers">
    <img alt="stars gitHub" src="https://img.shields.io/github/stars/renanarantes/gobarber-11?style=social">
  </a>
</div>

<h4> O GoBarber é uma aplicação de delivery de serviços de barbearia feita durante o bootcamp <a href="https://rocketseat.com.br/gostack">GoStack</a> da <a href="https://rocketseat.com.br/"> Rocketseat </a>.</h4>

# Tecnologias
 - Typescript
 - Padronização de código com Eslint, Prettier e Editor Config
 - Testes com Jest e SuperTest
 - Formatação de datas com __date-fns__
 - Virtualização __docker__
 - Armazenamento __postgreSQL__, __mongodb__ e __redis__
 

**Backend**
   - Cifragem com __bcryptjs__
   - Middlewares com __celebrate__ e __cors__
   - HTTP com __express__
   - Templates de e-mail com __handlebars__
   - Tokens com __jsonwebtoken__
   - multipart/formdata com __multer__
   - Envino de e-mails com __nodemailer__
   - Controle de requisições com __rate-limiter-flexible__

**Frontend** e **Mobile**
  - Estilização com __styles-component__ e __polished__
  - Validação de input's com __yup__
  - Requisição com __axios__
  - Formulários com __unform__
  
# Agendamento de serviços

**Requisitos funcionais**
- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder listar os dias de um mes com pelo menos horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos não funcionais**
- A listagem de prestadores deve ser armazenada em cache;

**Regras de negócio**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h as 18h(Primeiro as 8h, ultimo as 17h);
- O usuário não pode agendar em um horário ja ocupado;
- O usuário não pode agendar em um horário que ja passou;
- O usuário não pode agendar serviços consigo mesmo;

# Painel do prestador

**Requisitos funcionais**
- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**Requisitos não funcionais**
- Os agendamentos do prestador no dia devem poder ser agendamentos em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando socket.io;

**Regras de negócio**
- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Recuperação de senha
**Requisitos funcionais**
- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não funcionais**
- Utilizar Mailtrap para testar envios de emails em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios de emails em produção;
- O envio de emails deve acontecer em segundo plano(background job);

**Regras de negócio**
- O link enviado por email para resetar senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**Requisitos funcionais**
- O usuário deve poder atualizar seu nome, email e senha;

**Requisitos não funcionais**

**Regras de negócio**
- O usuário não pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha o usuário deve informar a senha antiga;
- Para atualizar sua senha o usuário precisa confirmar a nova senha;
