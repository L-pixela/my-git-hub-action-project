const assert = require('chai').assert;
const app = require('../app');

describe('Simple test', function() {
    it('should return hello message', function() {
        assert.equal(app(), 'Hello, Github Actions!');
    });
});