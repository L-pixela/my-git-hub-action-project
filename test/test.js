const assert = require('chai').assert;
const app = require('../app');

describe('Simple test', function(){
    if('should return hello message', function(){
        assert.equal('Hello, Github Actions!', 'Hello, Github Action');
    });
});