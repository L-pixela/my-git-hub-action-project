const assert = require('chai').assert;
const app = require('../app'); // Make sure this returns the correct function or value

describe('Simple test', function() {
    it('should return hello message', function() {
        assert.equal(app(), 'Hello, Github Actions!');
    });
});