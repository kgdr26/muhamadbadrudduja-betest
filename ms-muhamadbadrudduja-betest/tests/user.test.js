const request =
  require('supertest');

const app =
  require('../src/app');

describe('GET /users', () => {

  it('should return unauthorized',
    async () => {

    const res =
      await request(app)
      .get('/users');

    expect(res.statusCode)
      .toBe(401);
  });
});