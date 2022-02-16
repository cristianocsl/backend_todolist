const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('../modelConnection.test');

const UserModel = require('../../../api/model/user/register');

describe('Insere um novo usuário BD', function () {
  let connectionMock;

  const payloadUser = {
    nome: 'Example Movie',
    email: 'Jane Dow',
    senha: 'shalom33',
  };

  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async function () {
    await connectionMock.db('todo_list').collection('user').drop();
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await UserModel.register(payloadUser);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo usuário inserido', async function () {
      const response = await UserModel.register(payloadUser);

      expect(response).to.have.a.property('id');
    });
  });
});