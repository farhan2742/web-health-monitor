"use strict";
// Set dependancies
const request = require('supertest'), // For testing express server
app = require('../resources/server/app.js'), // express server
createUrl = require('../resources/server/app.js'), // Helper Function to create new url in db
deleteUrl = require('../resources/server/app.js'), // Helper Function to delete a url in db
readUrl = require('../resources/server/app.js'), // Helper Function to download all urls in db
updateUrl = require('../resources/server/app.js'); // Helper Function to update a url in db
// Test Function are defined
describe('Tests that the function "createUrl()" is declared', () => {
    test('It should return true', async () => {
        expect(createUrl).toBeDefined(); // Check if the function is defined
    });
});
describe('Tests that the function "deleteUrl()" is declared', () => {
    test('It should return true', async () => {
        expect(deleteUrl).toBeDefined(); // Check if the function is defined
    });
});
describe('Tests that the function "readUrl()" is declared', () => {
    test('It should return true', async () => {
        expect(readUrl).toBeDefined(); // Check if the function is defined
    });
});
describe('Tests that the function "updateUrl()" is declared', () => {
    test('It should return true', async () => {
        expect(updateUrl).toBeDefined(); // Check if the function is defined
    });
});
// Test Funcion names and types
describe('Tests that the function "createUrl()" is a function', () => {
    test('It should be a function', async () => {
        expect(typeof createUrl).toBe("function"); // Check type
    });
});
describe('Tests that the function "deleteUrl()" is a function', () => {
    test('It should be a function', async () => {
        expect(typeof deleteUrl).toBe("function"); // Check type
    });
});
describe('Tests that the function "readUrl()" is a function', () => {
    test('It should be a function', async () => {
        expect(typeof readUrl).toBe("function"); // Check type
    });
});
describe('Tests that the function "updateUrl()" is a function', () => {
    test('It should be a function', async () => {
        expect(typeof updateUrl).toBe("function"); // Check type
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcGkudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1CO0FBRW5CLE1BQU0sT0FBTyxHQUFTLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBb0MsNkJBQTZCO0FBQ3JHLEdBQUcsR0FBYSxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBbUIsaUJBQWlCO0FBQ3pGLFNBQVMsR0FBTyxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBbUIsMENBQTBDO0FBQ2xILFNBQVMsR0FBTyxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBbUIsd0NBQXdDO0FBQ2hILE9BQU8sR0FBUyxPQUFPLENBQUMsNEJBQTRCLENBQUMsRUFBbUIsNkNBQTZDO0FBQ3JILFNBQVMsR0FBTyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFrQix3Q0FBd0M7QUFFdEgsNEJBQTRCO0FBRTVCLFFBQVEsQ0FBQyxtREFBbUQsRUFBRyxHQUFHLEVBQUU7SUFDaEUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFzQyxtQ0FBbUM7SUFDN0csQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxtREFBbUQsRUFBRyxHQUFHLEVBQUU7SUFDaEUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFzQyxtQ0FBbUM7SUFDN0csQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxpREFBaUQsRUFBRyxHQUFHLEVBQUU7SUFDOUQsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUF3QyxtQ0FBbUM7SUFDN0csQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxtREFBbUQsRUFBRyxHQUFHLEVBQUU7SUFDaEUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFzQyxtQ0FBbUM7SUFDN0csQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILCtCQUErQjtBQUUvQixRQUFRLENBQUMscURBQXFELEVBQUcsR0FBRyxFQUFFO0lBQ2xFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2QyxNQUFNLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBNEIsYUFBYTtJQUN2RixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLHFEQUFxRCxFQUFHLEdBQUcsRUFBRTtJQUNsRSxJQUFJLENBQUMseUJBQXlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDdkMsTUFBTSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQTRCLGFBQWE7SUFDdkYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsQ0FBQyxtREFBbUQsRUFBRyxHQUFHLEVBQUU7SUFDaEUsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3ZDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUE4QixhQUFhO0lBQ3ZGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMscURBQXFELEVBQUcsR0FBRyxFQUFFO0lBQ2xFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUN2QyxNQUFNLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBNEIsYUFBYTtJQUN2RixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBR0gscUJBQXFCO0FBRXJCLHdHQUF3RztBQUN4RyxzR0FBc0c7QUFDdEcseUdBQXlHO0FBQ3pHLG9IQUFvSDtBQUNwSCwrR0FBK0c7QUFDL0csMkdBQTJHO0FBQzNHLDhHQUE4RztBQUM5Ryw4RkFBOEY7QUFDOUYsT0FBTztBQUNQLEtBQUs7QUFFTCx5R0FBeUc7QUFDekcsc0dBQXNHO0FBQ3RHLHlHQUF5RztBQUN6RyxvSEFBb0g7QUFDcEgsK0dBQStHO0FBQy9HLFlBQVk7QUFDWixvR0FBb0c7QUFDcEcsWUFBWTtBQUNaLFVBQVU7QUFDViwyR0FBMkc7QUFDM0csMkdBQTJHO0FBQzNHLDhHQUE4RztBQUM5Ryw4RkFBOEY7QUFDOUYsT0FBTztBQUNQLEtBQUs7QUFFTCx5R0FBeUc7QUFDekcsc0dBQXNHO0FBQ3RHLHlHQUF5RztBQUN6RyxvSEFBb0g7QUFDcEgsK0dBQStHO0FBQy9HLFlBQVk7QUFDWixvR0FBb0c7QUFDcEcsWUFBWTtBQUNaLFVBQVU7QUFDViwyR0FBMkc7QUFDM0csMkdBQTJHO0FBQzNHLDhHQUE4RztBQUM5Ryw4RkFBOEY7QUFDOUYsT0FBTztBQUNQLEtBQUs7QUFFTCx5R0FBeUc7QUFDekcsc0dBQXNHO0FBQ3RHLHlHQUF5RztBQUN6RyxrSEFBa0g7QUFDbEgsK0dBQStHO0FBQy9HLFlBQVk7QUFDWixvR0FBb0c7QUFDcEcsWUFBWTtBQUNaLFVBQVU7QUFDViwyR0FBMkc7QUFDM0csMkdBQTJHO0FBQzNHLDhHQUE4RztBQUM5Ryw4RkFBOEY7QUFDOUYsT0FBTztBQUNQLEtBQUs7QUFFTCx3R0FBd0c7QUFDeEcsc0dBQXNHO0FBQ3RHLHlHQUF5RztBQUN6RyxvSEFBb0g7QUFDcEgsK0dBQStHO0FBQy9HLFlBQVk7QUFDWiwyR0FBMkc7QUFDM0csOEdBQThHO0FBQzlHLFlBQVk7QUFDWixVQUFVO0FBQ1YsMkdBQTJHO0FBQzNHLDJHQUEyRztBQUMzRyw4R0FBOEc7QUFDOUcsOEZBQThGO0FBQzlGLE9BQU87QUFDUCxLQUFLO0FBRUwsMkdBQTJHO0FBQzNHLHNHQUFzRztBQUN0Ryx5R0FBeUc7QUFDekcsb0hBQW9IO0FBQ3BILCtHQUErRztBQUMvRyxZQUFZO0FBQ1osdUdBQXVHO0FBQ3ZHLFlBQVk7QUFDWixVQUFVO0FBQ1YsMkdBQTJHO0FBQzNHLDJHQUEyRztBQUMzRyw4R0FBOEc7QUFDOUcsOEZBQThGO0FBQzlGLE9BQU87QUFDUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU2V0IGRlcGVuZGFuY2llc1xuXG5jb25zdCByZXF1ZXN0ICAgICAgID0gcmVxdWlyZSgnc3VwZXJ0ZXN0JyksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGVzdGluZyBleHByZXNzIHNlcnZlclxuICAgICAgYXBwICAgICAgICAgICA9IHJlcXVpcmUoJy4uL3Jlc291cmNlcy9zZXJ2ZXIvYXBwLmpzJyksICAgICAgICAgICAgICAgICAgLy8gZXhwcmVzcyBzZXJ2ZXJcbiAgICAgIGNyZWF0ZVVybCAgICAgPSByZXF1aXJlKCcuLi9yZXNvdXJjZXMvc2VydmVyL2FwcC5qcycpLCAgICAgICAgICAgICAgICAgIC8vIEhlbHBlciBGdW5jdGlvbiB0byBjcmVhdGUgbmV3IHVybCBpbiBkYlxuICAgICAgZGVsZXRlVXJsICAgICA9IHJlcXVpcmUoJy4uL3Jlc291cmNlcy9zZXJ2ZXIvYXBwLmpzJyksICAgICAgICAgICAgICAgICAgLy8gSGVscGVyIEZ1bmN0aW9uIHRvIGRlbGV0ZSBhIHVybCBpbiBkYlxuICAgICAgcmVhZFVybCAgICAgICA9IHJlcXVpcmUoJy4uL3Jlc291cmNlcy9zZXJ2ZXIvYXBwLmpzJyksICAgICAgICAgICAgICAgICAgLy8gSGVscGVyIEZ1bmN0aW9uIHRvIGRvd25sb2FkIGFsbCB1cmxzIGluIGRiXG4gICAgICB1cGRhdGVVcmwgICAgID0gcmVxdWlyZSgnLi4vcmVzb3VyY2VzL3NlcnZlci9hcHAuanMnKTsgICAgICAgICAgICAgICAgICAvLyBIZWxwZXIgRnVuY3Rpb24gdG8gdXBkYXRlIGEgdXJsIGluIGRiXG4gICAgICBcbi8vIFRlc3QgRnVuY3Rpb24gYXJlIGRlZmluZWRcblxuZGVzY3JpYmUoJ1Rlc3RzIHRoYXQgdGhlIGZ1bmN0aW9uIFwiY3JlYXRlVXJsKClcIiBpcyBkZWNsYXJlZCcgLCAoKSA9PiB7ICAgICAgICAvLyBUZXN0IGlmIGEgZnVuY3Rpb24gaXMgZGVmaW5lZFxuICAgIHRlc3QoJ0l0IHNob3VsZCByZXR1cm4gdHJ1ZScsIGFzeW5jICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRlc3RcbiAgICAgICAgZXhwZWN0KGNyZWF0ZVVybCkudG9CZURlZmluZWQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBmdW5jdGlvbiBpcyBkZWZpbmVkXG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ1Rlc3RzIHRoYXQgdGhlIGZ1bmN0aW9uIFwiZGVsZXRlVXJsKClcIiBpcyBkZWNsYXJlZCcgLCAoKSA9PiB7ICAgICAgICAvLyBUZXN0IGlmIGEgZnVuY3Rpb24gaXMgZGVmaW5lZFxuICAgIHRlc3QoJ0l0IHNob3VsZCByZXR1cm4gdHJ1ZScsIGFzeW5jICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRlc3RcbiAgICAgICAgZXhwZWN0KGRlbGV0ZVVybCkudG9CZURlZmluZWQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBmdW5jdGlvbiBpcyBkZWZpbmVkXG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ1Rlc3RzIHRoYXQgdGhlIGZ1bmN0aW9uIFwicmVhZFVybCgpXCIgaXMgZGVjbGFyZWQnICwgKCkgPT4geyAgICAgICAgICAvLyBUZXN0IGlmIGEgZnVuY3Rpb24gaXMgZGVmaW5lZFxuICAgIHRlc3QoJ0l0IHNob3VsZCByZXR1cm4gdHJ1ZScsIGFzeW5jICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRlc3RcbiAgICAgICAgZXhwZWN0KHJlYWRVcmwpLnRvQmVEZWZpbmVkKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBmdW5jdGlvbiBpcyBkZWZpbmVkXG4gICAgfSk7XG59KTtcblxuZGVzY3JpYmUoJ1Rlc3RzIHRoYXQgdGhlIGZ1bmN0aW9uIFwidXBkYXRlVXJsKClcIiBpcyBkZWNsYXJlZCcgLCAoKSA9PiB7ICAgICAgICAvLyBUZXN0IGlmIGEgZnVuY3Rpb24gaXMgZGVmaW5lZFxuICAgIHRlc3QoJ0l0IHNob3VsZCByZXR1cm4gdHJ1ZScsIGFzeW5jICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRlc3RcbiAgICAgICAgZXhwZWN0KHVwZGF0ZVVybCkudG9CZURlZmluZWQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBmdW5jdGlvbiBpcyBkZWZpbmVkXG4gICAgfSk7XG59KTtcblxuLy8gVGVzdCBGdW5jaW9uIG5hbWVzIGFuZCB0eXBlc1xuXG5kZXNjcmliZSgnVGVzdHMgdGhhdCB0aGUgZnVuY3Rpb24gXCJjcmVhdGVVcmwoKVwiIGlzIGEgZnVuY3Rpb24nICwgKCkgPT4geyAgICAgIC8vIFRlc3QgdG8gY2hlY2sgdHlwZSBvZiBmdW5jdGlvblxuICAgIHRlc3QoJ0l0IHNob3VsZCBiZSBhIGZ1bmN0aW9uJywgYXN5bmMgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRoZSB0ZXN0XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgY3JlYXRlVXJsKS50b0JlKFwiZnVuY3Rpb25cIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHR5cGVcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnVGVzdHMgdGhhdCB0aGUgZnVuY3Rpb24gXCJkZWxldGVVcmwoKVwiIGlzIGEgZnVuY3Rpb24nICwgKCkgPT4geyAgICAgIC8vIFRlc3QgdG8gY2hlY2sgdHlwZSBvZiBmdW5jdGlvblxuICAgIHRlc3QoJ0l0IHNob3VsZCBiZSBhIGZ1bmN0aW9uJywgYXN5bmMgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRoZSB0ZXN0XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgZGVsZXRlVXJsKS50b0JlKFwiZnVuY3Rpb25cIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHR5cGVcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnVGVzdHMgdGhhdCB0aGUgZnVuY3Rpb24gXCJyZWFkVXJsKClcIiBpcyBhIGZ1bmN0aW9uJyAsICgpID0+IHsgICAgICAgIC8vIFRlc3QgdG8gY2hlY2sgdHlwZSBvZiBmdW5jdGlvblxuICAgIHRlc3QoJ0l0IHNob3VsZCBiZSBhIGZ1bmN0aW9uJywgYXN5bmMgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRoZSB0ZXN0XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgcmVhZFVybCkudG9CZShcImZ1bmN0aW9uXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHR5cGVcbiAgICB9KTtcbn0pO1xuXG5kZXNjcmliZSgnVGVzdHMgdGhhdCB0aGUgZnVuY3Rpb24gXCJ1cGRhdGVVcmwoKVwiIGlzIGEgZnVuY3Rpb24nICwgKCkgPT4geyAgICAgIC8vIFRlc3QgdG8gY2hlY2sgdHlwZSBvZiBmdW5jdGlvblxuICAgIHRlc3QoJ0l0IHNob3VsZCBiZSBhIGZ1bmN0aW9uJywgYXN5bmMgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzdWx0IG9mIHRoZSB0ZXN0XG4gICAgICAgIGV4cGVjdCh0eXBlb2YgdXBkYXRlVXJsKS50b0JlKFwiZnVuY3Rpb25cIik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHR5cGVcbiAgICB9KTtcbn0pO1xuICAgICAgXG4gICAgICBcbi8vIFRlc3QgQVBJIEVORFBPSU5UU1xuXG4vLyBkZXNjcmliZSgnR2V0IEVuZHBvaW50cycsICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIEdFVCBFbmRwb2ludFxuLy8gICBpdCgncmVzcG9uZHMgd2l0aCBqc29uJywgYXN5bmMgKGRvbmUpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9uIG9mIHRoZSB0ZXN0XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChhcHApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBodHRwIHJlcXVlc3Rcbi8vICAgICAgIC5nZXQoJy91cmwvZmV0Y2gnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVSTCBmb3IgcmVxdWVzdCBhbmQgUmVxdWVzdCB0eXBlXG4vLyAgICAgICAuc2VuZCgpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhIHRvIHNlbmQgaW4gdGhlIHJlcXVlc3Rcbi8vICAgICAgIC5leHBlY3QoJ0NvbnRlbnQtVHlwZScsIC9qc29uLyk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIFJlc3BvbnNlIHR5cGUgXG4vLyAgICAgZXhwZWN0KHJlcy5zdGF0dXNDb2RlKS50b0VxdWFsKDIwMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBTdGF0cyBvZiByZXNwb25zZVxuLy8gICAgIGRvbmUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgVGVzdFxuLy8gICB9KVxuLy8gfSlcblxuLy8gZGVzY3JpYmUoJ1BPU1QgRW5kcG9pbnRzJywgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdGluZyBQT1NUIEVuZHBvaW50XG4vLyAgIGl0KCdyZXNwb25kcyB3aXRoIGpzb24nLCBhc3luYyAoZG9uZSkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb24gb2YgdGhlIHRlc3Rcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGFwcCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGh0dHAgcmVxdWVzdFxuLy8gICAgICAgLnBvc3QoJy91cmwvYWRkJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVJMIGZvciByZXF1ZXN0IGFuZCBSZXF1ZXN0IHR5cGVcbi8vICAgICAgIC5zZW5kKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGEgdG8gc2VuZCBpbiB0aGUgcmVxdWVzdFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgXCJ1cmxcIjpcInd3dy5mb3hjb25uLmNvbVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVJMIHRvIGFkZCBpbiBEQlxuLy8gICAgICAgICB9XG4vLyAgICAgICApXG4vLyAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgUmVxdWVzdCBIZWFkZXIgVHlwZVxuLy8gICAgICAgLmV4cGVjdCgnQ29udGVudC1UeXBlJywgL2pzb24vKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzcG9uc2UgdHlwZSBcbi8vICAgICBleHBlY3QocmVzLnN0YXR1c0NvZGUpLnRvRXF1YWwoMjAwKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIFN0YXRzIG9mIHJlc3BvbnNlXG4vLyAgICAgZG9uZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBUZXN0XG4vLyAgIH0pXG4vLyB9KVxuXG4vLyBkZXNjcmliZSgnUE9TVCBFbmRwb2ludHMnLCAoKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIFBPU1QgRW5kcG9pbnRcbi8vICAgaXQoJ3Jlc3BvbmRzIHdpdGgganNvbicsIGFzeW5jIChkb25lKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjdGlvbiBvZiB0aGUgdGVzdFxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QoYXBwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgaHR0cCByZXF1ZXN0XG4vLyAgICAgICAucG9zdCgnL3VybC9zdWJVcmxzJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVUkwgZm9yIHJlcXVlc3QgYW5kIFJlcXVlc3QgdHlwZVxuLy8gICAgICAgLnNlbmQoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YSB0byBzZW5kIGluIHRoZSByZXF1ZXN0XG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBcInVybFwiOlwiaHR0cDovL3d3dy5za2lwcS5vcmdcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVUkwgdG8gYWRkIGluIERCXG4vLyAgICAgICAgIH1cbi8vICAgICAgIClcbi8vICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBSZXF1ZXN0IEhlYWRlciBUeXBlXG4vLyAgICAgICAuZXhwZWN0KCdDb250ZW50LVR5cGUnLCAvanNvbi8pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBSZXNwb25zZSB0eXBlIFxuLy8gICAgIGV4cGVjdChyZXMuc3RhdHVzQ29kZSkudG9FcXVhbCgyMDApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgU3RhdHMgb2YgcmVzcG9uc2Vcbi8vICAgICBkb25lKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIFRlc3Rcbi8vICAgfSlcbi8vIH0pXG5cbi8vIGRlc2NyaWJlKCdQT1NUIEVuZHBvaW50cycsICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3RpbmcgUE9TVCBFbmRwb2ludFxuLy8gICBpdCgncmVzcG9uZHMgd2l0aCBqc29uJywgYXN5bmMgKGRvbmUpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9uIG9mIHRoZSB0ZXN0XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChhcHApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBodHRwIHJlcXVlc3Rcbi8vICAgICAgIC5wb3N0KCcvdXJsL3N0YXRzJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVUkwgZm9yIHJlcXVlc3QgYW5kIFJlcXVlc3QgdHlwZVxuLy8gICAgICAgLnNlbmQoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0YSB0byBzZW5kIGluIHRoZSByZXF1ZXN0XG4vLyAgICAgICAgIHtcbi8vICAgICAgICAgICBcInVybFwiOlwiaHR0cDovL3d3dy5za2lwcS5vcmdcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVUkwgdG8gYWRkIGluIERCXG4vLyAgICAgICAgIH1cbi8vICAgICAgIClcbi8vICAgICAgIC5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNldCBSZXF1ZXN0IEhlYWRlciBUeXBlXG4vLyAgICAgICAuZXhwZWN0KCdDb250ZW50LVR5cGUnLCAvanNvbi8pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBSZXNwb25zZSB0eXBlIFxuLy8gICAgIGV4cGVjdChyZXMuc3RhdHVzQ29kZSkudG9FcXVhbCgyMDApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgU3RhdHMgb2YgcmVzcG9uc2Vcbi8vICAgICBkb25lKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIFRlc3Rcbi8vICAgfSlcbi8vIH0pXG5cbi8vIGRlc2NyaWJlKCdQVVQgRW5kcG9pbnRzJywgKCkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3RpbmcgUFVUIEVuZHBvaW50XG4vLyAgIGl0KCdyZXNwb25kcyB3aXRoIGpzb24nLCBhc3luYyAoZG9uZSkgPT4geyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBY3Rpb24gb2YgdGhlIHRlc3Rcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0KGFwcCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIGh0dHAgcmVxdWVzdFxuLy8gICAgICAgLnB1dCgnL3VybC91cGRhdGUnKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVJMIGZvciByZXF1ZXN0IGFuZCBSZXF1ZXN0IHR5cGVcbi8vICAgICAgIC5zZW5kKCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERhdGEgdG8gc2VuZCBpbiB0aGUgcmVxdWVzdFxuLy8gICAgICAgICB7XG4vLyAgICAgICAgICAgXCJvbGRVcmxcIjpcInd3dy5mb3hjb25uLmNvbVwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVVJMIHRvIGJlIGNoYW5nZWQgaW4gREJcbi8vICAgICAgICAgICBcIm5ld1VybFwiOlwiaHR0cDovL3d3dy5lc3BuLmNvbVwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVUkwgdG8gYmUgY2hhbmdlZCB0byBpbiBEQlxuLy8gICAgICAgICB9XG4vLyAgICAgICApXG4vLyAgICAgICAuc2V0KCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgUmVxdWVzdCBIZWFkZXIgVHlwZVxuLy8gICAgICAgLmV4cGVjdCgnQ29udGVudC1UeXBlJywgL2pzb24vKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhwZWN0ZWQgUmVzcG9uc2UgdHlwZSBcbi8vICAgICBleHBlY3QocmVzLnN0YXR1c0NvZGUpLnRvRXF1YWwoMjAwKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIFN0YXRzIG9mIHJlc3BvbnNlXG4vLyAgICAgZG9uZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbG9zZSBUZXN0XG4vLyAgIH0pXG4vLyB9KVxuXG4vLyBkZXNjcmliZSgnREVMRVRFIEVuZHBvaW50cycsICgpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIERFTEVURSBFbmRwb2ludFxuLy8gICBpdCgncmVzcG9uZHMgd2l0aCBqc29uJywgYXN5bmMgKGRvbmUpID0+IHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWN0aW9uIG9mIHRoZSB0ZXN0XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdChhcHApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBodHRwIHJlcXVlc3Rcbi8vICAgICAgIC5kZWxldGUoJy91cmwvZGVsZXRlJykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVSTCBmb3IgcmVxdWVzdCBhbmQgUmVxdWVzdCB0eXBlXG4vLyAgICAgICAuc2VuZCggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYXRhIHRvIHNlbmQgaW4gdGhlIHJlcXVlc3Rcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgIFwidXJsXCI6XCJodHRwOi8vd3d3LmVzcG4uY29tXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVSTCB0byByZW1vdmUgaW4gREJcbi8vICAgICAgICAgfVxuLy8gICAgICAgKVxuLy8gICAgICAgLnNldCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IFJlcXVlc3QgSGVhZGVyIFR5cGVcbi8vICAgICAgIC5leHBlY3QoJ0NvbnRlbnQtVHlwZScsIC9qc29uLykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4cGVjdGVkIFJlc3BvbnNlIHR5cGUgXG4vLyAgICAgZXhwZWN0KHJlcy5zdGF0dXNDb2RlKS50b0VxdWFsKDIwMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBlY3RlZCBTdGF0cyBvZiByZXNwb25zZVxuLy8gICAgIGRvbmUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xvc2UgVGVzdFxuLy8gICB9KVxuLy8gfSlcbiJdfQ==