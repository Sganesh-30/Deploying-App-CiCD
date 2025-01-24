const request = require('supertest');
const app = require('../app'); // Import the app instance

describe('GET /', function() {
  it('responds with Welcome to the Game!', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /text/)
      .expect(200, 'Welcome to the Game!', done);
  });
});

describe('GET /game', function() {
  it('responds with Game is in progress...', function(done) {
    request(app)
      .get('/game')
      .expect('Content-Type', /text/)
      .expect(200, 'Game is in progress...', done);
  });
});
