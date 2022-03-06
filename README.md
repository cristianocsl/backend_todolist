# Bem vindo(a) ao repositório do projeto To-do List Api.

## Contexto

API (Application Programming Interface) desenvolvida em NodeJS com MongoDB e MongoDB Atlas. Utiliza arquitetura em camadas (MSC - Model, Service and Controller) e constitui parte integrante de uma aplicação fullstack com o objetivo de fazer o gerenciamento de uma lista de tarefas a partir da criação, atualização e remoção de cada tarefa. Estas operações podem ser realizadas por usuários previamente cadastrados, através de uma tela de cadastro, tendo o acesso às tarefas através de uma tela de login.

------------

## Rotas

Para as requisições a seguir deve ser utilizado este link: https://backend-todo-list-cristiano.herokuapp.com/

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

* email deve ser uma string;

* senha deve ser uma string com 6 ou mais caracteres;

* Casos de falha na validação da requisição terão resposta com status 400 e uma mensagem de erro como o exemplo abaixo:


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
