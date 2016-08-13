/* eslint import/no-extraneous-dependencies: [error, { devDependencies: true }] */
'use strict';

const request = require('supertest');
const simpleApp = request(require('./examples/simple'));

describe('examples', () => {
  describe('simple', () => {
    it('returns package X-App headers', done => {
      simpleApp.get('/')
        .set('Origin', 'https://foo.com')
        .expect(200)
        .expect('Hello World')
        .expect('X-App-Name', 'awesome-app')
        .expect('X-App-Version', '1.2.3')
        .expect('X-App-Author', 'Foo Bar <foo.bar@example.com>')
        .expect('X-App-Homepage', 'https://example.com', done);
    });
  });
});
