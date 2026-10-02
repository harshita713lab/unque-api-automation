const req = require('supertest');
const { BASE_URL } = require('../config/config');

describe('Users API Tests', () => {

  test('GET /users/2 - fetch single user', async () => {
    const res = await req(BASE_URL).get('/users/2');

    if (res.statusCode !== 200) {
      throw new Error(`Expected 200, got ${res.statusCode}`);
    }

    if (!res.body.data || res.body.data.id !== 2) {
      throw new Error('Invalid user id');
    }
  });

  test('GET /users/23 - non existing user', async () => {
    const res = await req(BASE_URL).get('/users/23');

    if (res.statusCode !== 404) {
      throw new Error(`Expected 404, got ${res.statusCode}`);
    }
  });

  test('POST /users - create user', async () => {
    const data = { name: 'Harshita', job: 'QA Engineer' };
    const res = await req(BASE_URL).post('/users').send(data);

    if (res.statusCode !== 201 || res.body.name !== 'Harshita') {
      throw new Error('Create user failed');
    }
  });

  test('PUT /users/2 - update user', async () => {
    const data = { name: 'Harshita', job: 'SDET' };
    const res = await req(BASE_URL).put('/users/2').send(data);

    if (res.statusCode !== 200 || res.body.job !== 'SDET') {
      throw new Error('Update user failed');
    }
  });

  test('DELETE /users/2 - delete user', async () => {
    const res = await req(BASE_URL).delete('/users/2');

    if (res.statusCode !== 204) {
      throw new Error(`Expected 204, got ${res.statusCode}`);
    }
  });

});