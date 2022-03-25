/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('../modelConnection.test');

// const { client } = require('../../../api/model/connection');
const createTask = require('../../../api/model/task/createTask');

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
    it('deve existir um filme com o título cadastrado', async () => {
      await createTask(payloadTask);
      const createdTask = await connectionMock
        .db('todoDatabase')
        .collection('tasks')
        .findOne({ task: payloadTask.task });
      // eslint-disable-next-line no-unused-expressions
      expect(createdTask).to.be.not.null;
    });
  });
});
