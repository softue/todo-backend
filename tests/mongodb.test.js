/*

  https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
  https://www.geeksforgeeks.org/what-is-export-default-in-javascript/
  https://learn.coderslang.com/0005-how-to-test-node.js-backend-with-supertest/

  $ npm install --save-dev jest supertest

*/

import app, { mongoose } from '../app.js';
import request from 'supertest';
import { expect } from '@jest/globals';

var objectId;

test("soma 1+1", () => {
    expect((1+1)).toBe(2);
});

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/todos')
      .send({
        title: 'titulo',
        content: 'conteudo',
      })
    objectId = res.body._id;
    expect(res.statusCode).toEqual(201);
  }),
  
  it('should get all posts', async () => {
    const res = await request(app).get('/todos');
    const item = res.body.find( item => item._id === objectId);
    expect(item.title).toEqual("titulo");
    expect(item.content).toEqual("conteudo");
    expect(res.statusCode).toEqual(200);
  })
})

afterAll(done => {
  mongoose.connection.close()
  done();
});