import request from 'supertest';

import { app } from '../../../app';

// Close Server After Each Test
// afterEach((done) => {
//     app.Close();
//     done();
// });

describe.skip('employee/controller/getEmployeeList', () => {
  test.skip('Should Employee List', async () => {
    // Get Request For Employee List
    const response = await request(app).get('/employee/list');
    // After Getting Response Check Possiblity
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.data).toEqual('employee_list');
  });
});
