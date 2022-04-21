/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectId } = require('mongodb');
const { getConnection } = require('../modelConnection');

const { register } = require('../../../api/model/user');

describe('Insere um novo usuário BD', function () {
  let connectionMock;

  const payloadUser = {
    nome: 'Ana',
    email: 'ganedow@gmail.com',
    senha: 'shalom33',
  };

  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async function () {
    MongoClient.connect.restore();
  });

  describe('quando é inserido com sucesso', function () {
    it('retorna um objeto', async function () {
      const response = await register({ ...payloadUser });

      expect(response).to.be.a('object');
    });

    it('tal objeto possui uma "_id" do novo usuário inserido', async function () {
      const response = await register({ ...payloadUser });

      expect(response).to.have.a.property('_id');
    });

    it('deve existir um usuário cadastrado', async () => {
      const { _id } = await register({
          nome: 'Ana',
          email: 'ganedow@gmail.com',
          senha: 'shalom33',
        });
      const db = await connectionMock.db('todoDatabase');
      const coll = await db.collection('users');
      const id = await coll.find(ObjectId(_id));
      expect(id).to.be.not.null;
    });
  });
});