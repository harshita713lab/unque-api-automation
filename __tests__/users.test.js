const request = require('supertest');
const { BASE_URL } = require('../config/config');

describe('Users API Automation Suite (ReqRes)', () => {
  
  // 1. GET Request - Single User & Validation
  test('GET /users/2 - Should return user details with status 200', async () => {
    const response = await request(BASE_URL).get('/users/2');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.data).toHaveProperty('id', 2);
    expect(response.body.data).toHaveProperty('email');
    expect(response.body.data.email).toContain('@reqres.in');
  });

  // 2. GET Request - Negative Test Case (404)
  test('GET /users/23 - Should return 404 for non-existing user', async () => {
    const response = await request(BASE_URL).get('/users/23');
    
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({});
  });

  // 3. POST Request - Create New User
  test('POST /users - Should create a new user with status 201', async () => {
    const newUser = {
      name: 'Harshita Rathore',
      job: 'SDET Automation Engineer'
    };

    const response = await request(BASE_URL)
      .post('/users')
      .send(newUser);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.job).toBe(newUser.job);
    expect(response.body).toHaveProperty('createdAt');
  });

  // 4. PUT Request - Update User Details
  test('PUT /users/2 - Should update user details', async () => {
    const updatedData = {
      name: 'Harshita Rathore',
      job: 'Senior Automation Lead'
    };

    const response = await request(BASE_URL)
      .put('/users/2')
      .send(updatedData);

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe(updatedData.name);
    expect(response.body.job).toBe(updatedData.job);
    expect(response.body).toHaveProperty('updatedAt');
  });

  // 5. DELETE Request - Remove User
  test('DELETE /users/2 - Should delete user with status 204', async () => {
    const response = await request(BASE_URL).delete('/users/2');
    
    expect(response.statusCode).toBe(204);
  });

});