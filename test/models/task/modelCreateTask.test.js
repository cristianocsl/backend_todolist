/* eslint-disable no-unused-expressions */
/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('../modelConnection');

const { createTask } = require('../../../api/model/task');

describe('Insere uma nova task', () => {
  let connectionMock;
  
  const payloadTask = { task: 'ir ao mercado' };
  
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  });
  
  describe('quando é inserido com sucesso', () => {
    it('tal objeto possui o "_id" da nova tarefa inserida', async () => {
      const response = await createTask({ ...payloadTask });
      expect(response).to.have.a.property('_id');
    });

    it('esperado retornar um objeto', async () => {
      const response = await createTask({ ...payloadTask });
      expect(response).to.be.an('object');
    });

    it('deve existir uma tarefa cadastrada', async () => {
      await createTask({ ...payloadTask });
      const db = await connectionMock.db('todoDatabase');
      const collect = await db.collection('tasks');
      const task = await collect.find().toArray();
      expect(task).to.be.not.null;
    });
  });
});
