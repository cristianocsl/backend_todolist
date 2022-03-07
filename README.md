# Bem vindo(a) ao repositório do projeto To-do List Api.

## Contexto

API (Application Programming Interface) desenvolvida em NodeJS com MongoDB e MongoDB Atlas. Utiliza arquitetura em camadas (MSC - Model Service Controllers) e constitui parte integrante de uma aplicação fullstack com o objetivo de fazer o gerenciamento de uma lista de tarefas a partir da criação, atualização e remoção de cada tarefa. Estas operações podem ser realizadas por usuários previamente cadastrados, através de uma tela de cadastro, tendo o acesso às tarefas através de uma tela de login.

------------
### Veja a aplicação no ar por este link: https://frontend-todolist-cris.herokuapp.com/
------------

## Rotas

Para as requisições a seguir deve ser utilizado este link: https://backend-todo-list-cristiano.herokuapp.com

## Registro do usuário

### Endpoint POST <code>/register</code>

* o corpo da requisição deve ter o seguinte formato:

```json
{
  "name": "Nome do Usuário",
  "email": "email@exemplo.com",
  "password": "senhasenha",
}
```
* name deve ser uma string com três ou mais caracteres;

* email deve ser uma string e ter formato compatível com email;

* senha deve ser uma string com 6 ou mais caracteres;


### Casos de falha na requisição para a rota <code>/register</code>:

Casos de falha na validação da requisição terão resposta com <code>status 400</code> e uma mensagem de erro como os exemplos abaixo:

<strong>Campo name não preenchido:</strong>
```json
{
  "message": "\"name\" is not allowed to be empty"
}
```

<strong>Campo email não preenchido:</strong>
```json
{
  "message": "\"email\" is not allowed to be empty"
}
```

<strong>Campo password não preenchido:</strong>
```json
{
  "message": "\"password\" is not allowed to be empty"
}
```

<strong>Campo name com menos de três caracteres:</strong>
```json
{
  "message": "\"name\" length must be at least 3 characters long"
}
```

<strong>Campo password com menos de 6 carecteres:</strong>
```json
{
  "message": "\"password\" length must be at least 6 characters long"
}
```

<strong>Campo email com formato inválido:</strong>
```json
{
  "message": "\"email\" must be a valid email"
}
```

<strong>Campo email com email que já existe no banco de dados (<code>status 409</code>):</strong>
```json
{
  "message": "User already registered"
}
```

### Caso de sucesso na requisição para a rota <code>/register</code>:

Casos de sucesso na validação da requisição terão resposta com <code>status 201</code>, uma mensagem de sucesso acompanhada pelo nome do usuário e o token de acesso:

```json
{
  "message": "User registered successfully!",
  "name": "my name",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI0MzkyZmNkYzVhODE4NGUxZDM0NmIiLCJuYW1lIjoiYXNkc2FkdyIsImVtYWlsIjoibGxsLWNjcmlzdGlhbm5vQGdtYWlsLmNvbSIsImlhdCI6MTY0NjU0MTEwNCwiZXhwIjoxNjQ3NzUwNzA0fQ.IJmBCQLwpqgMIczzYSO5t3FFqcNTVdmtN-k2WNar2ls"
}
```

## Login do usuário

### Endpoint POST <code>/login</code>

* o corpo da requisição deve ter o seguinte formato:

```json
{
  "email": "email@exemplo.com",
  "password": "senhasenha",
}
```

* email deve ser uma string e ter formato compatível com email;

* senha deve ser uma string com 6 ou mais caracteres;

### Casos de falha na requisição para a rota <code>/login</code>:

Casos de falha na validação da requisição terão resposta com <code>status 400</code> e uma mensagem de erro como os exemplos abaixo:

<strong>Campo email não preenchido:</strong>
```json
{
  "message": "\"email\" is not allowed to be empty"
}
```

<strong>Campo password não preenchido:</strong>
```json
{
  "message": "\"password\" is not allowed to be empty"
}
```


<strong>Campo email com formato inválido:</strong>
```json
{
  "message": "\"email\" must be a valid email"
}
```

<strong>Campo password com menos de 6 carecteres:</strong>
```json
{
  "message": "\"password\" length must be at least 6 characters long"
}
```

<strong>Campo email com um email que não existe no banco de dados:</strong>
```json
{
  "message": "User does not exist or email is incorrect"
}
```

<strong>Campo senha com uma senha diferente da que existe no banco de dados:</strong>
```json
{
  "message": "Incorrect passoword"
}
```

### Caso de sucesso na requisição para a rota <code>/login</code>:

Casos de sucesso na validação da requisição terão resposta com <code>status 200</code>, uma mensagem de sucesso acompanhada pelo nome do usuário e o token de acesso:

```json
{
  "message": "Login successfully!",
  "name": "my name",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI0MzkyZmNkYzVhODE4NGUxZDM0NmIiLCJuYW1lIjoiYXNkc2FkdyIsImVtYWlsIjoibGxsLWNjcmlzdGlhbm5vQGdtYWlsLmNvbSIsImlhdCI6MTY0NjU0MTEwNCwiZXhwIjoxNjQ3NzUwNzA0fQ.IJmBCQLwpqgMIczzYSO5t3FFqcNTVdmtN-k2WNar2ls"
}
```

## Criando tarefas

### Endpoint POST <code>/task</code>

* o corpo da requisição deve ter o seguinte formato:

```json
{
  "task": "Minha tarefa de hoje",
}
```

### Casos de falha na requisição para a rota POST <code>/task</code>:

Casos de falha na validação da requisição terão resposta com <code>status 400</code> e a seguinte mensagem de erro:

<strong>Campo task não preenchido:</strong>
```json
{
  "message": "\"task\" is not allowed to be empty"
}
```

Caso de falha na requisição devido a token terá como resposta o <code>status 401</code> acompanhado da seguinte mensagem:

<strong>Caso de token inválido ou expirado:</strong>
```json
{
  "message": "Expired or invalid token"
}
```

### Caso de sucesso na requisição para a rota POST <code>/task</code>:

Casos de sucesso na validação da requisição terão resposta com <code>status 201</code> e um objeto json com as seguintes chaves:

* _id: identificador da tarefa criada;
* task: tarefa inserida pelo usuário;
* userId: identificador do usuário, criado no momento de seu cadastro no banco de dados;
* createdAt: data de criação da tarefa, inserida automaticamente no momento de sua criação;
* status: classificador do estado da tarefa criada, que, no momento da criação da tarefa, é automaticamente definido como "To do", podendo ser modificado pelo usuário após a criação da tarefa.

```json
{
  "_id": "6224cc1d512edf339950f1f8",
  "task": "Minha tarefa de hoje",
  "userId": "6224392fcdc5a8184e1d346b",
  "createdAt": "06/03/2022 11:58:37",
  "status": "To do"
}
```

## Visualizando tarefas criadas

### Endpoint GET <code>/task</code>

### Casos de falha na requisição para a rota GET <code>/task</code>:

Caso de falha na requisição devido a token terá como resposta o <code>status 401</code> acompanhado da seguinte mensagem:

<strong>Caso de token inválido ou expirado:</strong>
```json
{
  "message": "Expired or invalid token"
}
```

### Caso de sucesso na requisição para a rota GET <code>/task</code>:

Casos de sucesso na validação da requisição terão resposta com <code>status 200</code> com a seguinte estrutura:

```json
[
  {
    "_id": "6224cc1d512edf339950f1f8",
    "task": "Minha tarefa número 1 de hoje",
    "userId": "6224392fcdc5a8184e1d346b",
    "createdAt": "06/03/2022 11:58:37",
    "status": "To do"
  },
  {
    "_id": "6224d588512edf339950f1f9",
    "task": "Minha tarefa número 2 de hoje",
    "userId": "6224392fcdc5a8184e1d346b",
    "createdAt": "06/03/2022 12:38:48",
    "status": "To do"
  }
]
```

## Atualizando tarefas criadas

### Endpoint PUT <code>/task/:taskId</code>

### Casos de falha na requisição para a rota PUT <code>/task/:taskId</code>:

Casos de falha na validação da requisição terão resposta com <code>status 400</code> e a seguinte mensagem de erro:

<strong>Campo task não preenchido:</strong>
```json
{
  "message": "\"task\" is not allowed to be empty"
}
```

Caso de falha na requisição devido a um identificador incorreto da tarefa terá como resposta o <code>status 404</code> acompanhado da seguinte mensagem:

<strong>Caso de identificador incorreto da tarefa:</strong>
```json
{
  "message": "Task does not exist"
}
```

Caso de falha na requisição devido a um identificador da tarefa com tamanho incompatível com o do identificador do MongoDB terá como resposta o <code>status 400</code> acompanhado da seguinte mensagem:

<strong>Caso de identificador com tamanho incompatível com o do mongodb:</strong>
```json
{
  "message": "Mongodb id must be 24 characters"
}
```

### Caso de sucesso na requisição para a rota PUT <code>/task/:taskId</code>:

Casos de sucesso na validação da requisição terão resposta com <code>status 200</code> com a seguinte mensagem:

```json
{
  "message": "Task updated successfully"
}
```


## Removendo tarefas criadas

### Endpoint DELETE <code>/task/:taskId</code>

### Casos de falha na requisição para a rota DELETE <code>/task/:taskId</code>:

Caso de falha na requisição devido a um identificador incorreto da tarefa terá como resposta o <code>status 404</code> acompanhado da seguinte mensagem:

<strong>Caso de identificador incorreto da tarefa:</strong>
```json
{
  "message": "Task does not exist"
}
```

Caso de falha na requisição devido a um identificador da tarefa com tamanho incompatível com o do identificador do MongoDB terá como resposta o <code>status 400</code> acompanhado da seguinte mensagem:

<strong>Caso de identificador com tamanho incompatível com o do mongodb:</strong>
```json
{
  "message": "Mongodb id must be 24 characters"
}
```

### Caso de sucesso na requisição para a rota DELETE <code>/task/:taskId</code>:

Caso de sucesso na validação da requisição terá resposta com <code>status 204</code> e ausência de mensagem.

## Ferramentas utilizadas


- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript);
- [MongoDB Atlas](https://www.mongodb.com/atlas/database): serviço de banco de dados de documentos em nuvem global para aplicações modernas;
- [Node.js](https://nodejs.org/en/docs/);
- [Heroku](https://id.heroku.com/): plataforma de hospedagem, configuração, testagem e publicação de projetos virtuais na nuvem. 

## Bibliotecas

- [body-parser](https://www.npmjs.com/package/body-parser): analise dos corpos de solicitação de entrada em um middleware antes de seus manipuladores;
- [cors](https://www.npmjs.com/package/cors): habilita requisições do front-end;
- [date-fns](https://www.npmjs.com/package/date-fns): conversão e opções de formato de datas;
- [dotenv](https://www.npmjs.com/package/dotenv): carrega variáveis de ambiente para deploy;
- [Express](https://www.npmjs.com/package/express): criação e manipulação de rotas;
- [eslint](https://www.npmjs.com/package/eslint): padrão de estilização de código;
- [http-status-codes](https://www.npmjs.com/package/http-status-codes): facilitar legibilidade dos códigos http;
- [joi](https://www.npmjs.com/package/joi): validação de requisições;
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): realiza autenticação entre duas partes por meio de um token assinado que autentica uma requisição web;
- [md5](https://www.npmjs.com/package/md5): criptografia;
- [mongodb](https://www.npmjs.com/package/mongodb): comunicação com bancos de dados;
- [nodemon](https://www.npmjs.com/package/nodemon): permite modo watch do servidor durante o desenvolvimento.

## Contatos

- Email: cslcristiano@gmail.com
- LinkedIn: (https://www.linkedin.com/in/cristianoseabralima/
- Github: https://github.com/cristianocsl
























