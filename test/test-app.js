var expect = require('chai').expect;
var request = require('request');
var assert = require('assert')
let server;
let hello = require('./hello')
describe('Airlines Test Group', () => {
  before(() => {
    server = require('../bin/www')
  }),

    after((done) => {

      delete require.cache[require.resolve('../bin/www')]
      done();


    }),
    it('Ping Check', function (done) {
      request('http://localhost:3000/ping', function (error, response, body) {
        expect(body).to.equal('Hello World!');

        done();

      });

    }),
    it('HTML Check', function (done) {
      request('http://localhost:3000', function (error, response, body) {
        expect(response.statusCode).to.equal(200);

        done();

      });

    }),
    it('Response Status Check', function (done) {
      request('http://localhost:3000/ping', function (error, response, body) {
        expect(response.statusCode).to.equal(200);

        done();

      });
    })
  it('Function Called Check', function (done) {
    assert.equal(hello(), 'hello')
    done();

  });


});





