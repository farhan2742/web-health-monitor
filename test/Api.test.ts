// Set dependancies

const request       = require('supertest'),                                   // For testing express server
      app           = require('../resources/server/app.js'),                  // express server
      createUrl     = require('../resources/server/app.js'),                  // Helper Function to create new url in db
      deleteUrl     = require('../resources/server/app.js'),                  // Helper Function to delete a url in db
      readUrl       = require('../resources/server/app.js'),                  // Helper Function to download all urls in db
      updateUrl     = require('../resources/server/app.js');                  // Helper Function to update a url in db
      
// Test Function are defined

describe('Tests that the function "createUrl()" is declared' , () => {        // Test if a function is defined
    test('It should return true', async () => {                               // Expected Result of test
        expect(createUrl).toBeDefined();                                      // Check if the function is defined
    });
});

describe('Tests that the function "deleteUrl()" is declared' , () => {        // Test if a function is defined
    test('It should return true', async () => {                               // Expected Result of test
        expect(deleteUrl).toBeDefined();                                      // Check if the function is defined
    });
});

describe('Tests that the function "readUrl()" is declared' , () => {          // Test if a function is defined
    test('It should return true', async () => {                               // Expected Result of test
        expect(readUrl).toBeDefined();                                        // Check if the function is defined
    });
});

describe('Tests that the function "updateUrl()" is declared' , () => {        // Test if a function is defined
    test('It should return true', async () => {                               // Expected Result of test
        expect(updateUrl).toBeDefined();                                      // Check if the function is defined
    });
});

// Test Funcion names and types

describe('Tests that the function "createUrl()" is a function' , () => {      // Test to check type of function
    test('It should be a function', async () => {                             // Expected Result of the test
        expect(typeof createUrl).toBe("function");                            // Check type
    });
});

describe('Tests that the function "deleteUrl()" is a function' , () => {      // Test to check type of function
    test('It should be a function', async () => {                             // Expected Result of the test
        expect(typeof deleteUrl).toBe("function");                            // Check type
    });
});

describe('Tests that the function "readUrl()" is a function' , () => {        // Test to check type of function
    test('It should be a function', async () => {                             // Expected Result of the test
        expect(typeof readUrl).toBe("function");                              // Check type
    });
});

describe('Tests that the function "updateUrl()" is a function' , () => {      // Test to check type of function
    test('It should be a function', async () => {                             // Expected Result of the test
        expect(typeof updateUrl).toBe("function");                            // Check type
    });
});
      
      
// Test API ENDPOINTS

// describe('Get Endpoints', () => {                                             // Testing GET Endpoint
//   it('responds with json', async (done) => {                                  // Action of the test
//     const res = await request(app)                                            // Create a http request
//       .get('/url/fetch')                                                      // URL for request and Request type
//       .send()                                                                 // Data to send in the request
//       .expect('Content-Type', /json/);                                        // Expected Response type 
//     expect(res.statusCode).toEqual(200);                                      // Expected Stats of response
//     done();                                                                   // Close Test
//   })
// })

// describe('POST Endpoints', () => {                                            // Testing POST Endpoint
//   it('responds with json', async (done) => {                                  // Action of the test
//     const res = await request(app)                                            // Create a http request
//       .post('/url/add')                                                       // URL for request and Request type
//       .send(                                                                  // Data to send in the request
//         {
//           "url":"www.foxconn.com"                                             // URL to add in DB
//         }
//       )
//       .set('Accept', 'application/json')                                      // Set Request Header Type
//       .expect('Content-Type', /json/)                                         // Expected Response type 
//     expect(res.statusCode).toEqual(200);                                      // Expected Stats of response
//     done();                                                                   // Close Test
//   })
// })

// describe('POST Endpoints', () => {                                            // Testing POST Endpoint
//   it('responds with json', async (done) => {                                  // Action of the test
//     const res = await request(app)                                            // Create a http request
//       .post('/url/subUrls')                                                   // URL for request and Request type
//       .send(                                                                  // Data to send in the request
//         {
//           "url":"http://www.skipq.org"                                        // URL to add in DB
//         }
//       )
//       .set('Accept', 'application/json')                                      // Set Request Header Type
//       .expect('Content-Type', /json/)                                         // Expected Response type 
//     expect(res.statusCode).toEqual(200);                                      // Expected Stats of response
//     done();                                                                   // Close Test
//   })
// })

// describe('POST Endpoints', () => {                                            // Testing POST Endpoint
//   it('responds with json', async (done) => {                                  // Action of the test
//     const res = await request(app)                                            // Create a http request
//       .post('/url/stats')                                                   // URL for request and Request type
//       .send(                                                                  // Data to send in the request
//         {
//           "url":"http://www.skipq.org"                                        // URL to add in DB
//         }
//       )
//       .set('Accept', 'application/json')                                      // Set Request Header Type
//       .expect('Content-Type', /json/)                                         // Expected Response type 
//     expect(res.statusCode).toEqual(200);                                      // Expected Stats of response
//     done();                                                                   // Close Test
//   })
// })

// describe('PUT Endpoints', () => {                                             // Testing PUT Endpoint
//   it('responds with json', async (done) => {                                  // Action of the test
//     const res = await request(app)                                            // Create a http request
//       .put('/url/update')                                                     // URL for request and Request type
//       .send(                                                                  // Data to send in the request
//         {
//           "oldUrl":"www.foxconn.com",                                         // URL to be changed in DB
//           "newUrl":"http://www.espn.com"                                      // URL to be changed to in DB
//         }
//       )
//       .set('Accept', 'application/json')                                      // Set Request Header Type
//       .expect('Content-Type', /json/)                                         // Expected Response type 
//     expect(res.statusCode).toEqual(200);                                      // Expected Stats of response
//     done();                                                                   // Close Test
//   })
// })

// describe('DELETE Endpoints', () => {                                          // Testing DELETE Endpoint
//   it('responds with json', async (done) => {                                  // Action of the test
//     const res = await request(app)                                            // Create a http request
//       .delete('/url/delete')                                                  // URL for request and Request type
//       .send(                                                                  // Data to send in the request
//         {
//           "url":"http://www.espn.com"                                         // URL to remove in DB
//         }
//       )
//       .set('Accept', 'application/json')                                      // Set Request Header Type
//       .expect('Content-Type', /json/)                                         // Expected Response type 
//     expect(res.statusCode).toEqual(200);                                      // Expected Stats of response
//     done();                                                                   // Close Test
//   })
// })
