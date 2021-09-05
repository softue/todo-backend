
/*

https://dev.to/nedsoft/testing-nodejs-express-api-with-jest-and-supertest-1km6
https://www.geeksforgeeks.org/what-is-export-default-in-javascript/
https://learn.coderslang.com/0005-how-to-test-node.js-backend-with-supertest/

$ npm install --save-dev jest supertest

*/

//const request = require('supertest');
//const app = require('../index');
import app from '../app.js';
import request from 'supertest';
import { expect } from '@jest/globals';
//import app from './index.js'

test("soma 1+1", () => {
    expect((1+1)).toBe(2);
});

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/todos')
      .send({
        title: 'titulo',
        title: 'conteudo',
      })
    expect(res.statusCode).toEqual(201);
    //expect(res.body).toHaveProperty('post');
  }),
  
  it('should get all posts', async () => {
    const res = await request(app).get('/todos');
    expect(res.body[0].title).toEqual("conteudo");
    expect(res.statusCode).toEqual(200);
    //expect(res.body).toHaveProperty('post');
  })
})