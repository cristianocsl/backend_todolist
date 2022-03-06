# Bem vindo(a) ao repositório do projeto To-do List Api.

## Contexto

API (Application Programming Interface) desenvolvida em NodeJS com MongoDB e MongoDB Atlas. Utiliza arquitetura em camadas (MSC - Model, Service and Controller) e constitui parte integrante de uma aplicação fullstack com o objetivo de fazer o gerenciamento de uma lista de tarefas a partir da criação, atualização e remoção de cada tarefa. Estas operações podem ser realizadas por usuários previamente cadastrados, através de uma tela de cadastro, tendo o acesso às tarefas através de uma tela de login.

------------

## Rotas

Para as requisições a seguir deve ser utilizado este link: https://backend-todo-list-cristiano.herokuapp.com/

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
  "message": "\"name\" length must be 3 characters long"
}
```

<strong>Campo password com menos de 6 carecteres:</strong>
```json
{
  "message": "\"password\" length must be 6 characters long"
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
  "message": "\"password\" length must be 6 characters long"
}
```


<strong>Campo email ou campo senha incorretos:</strong>
```json
{
  "message": "Email or password incorrect"
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
