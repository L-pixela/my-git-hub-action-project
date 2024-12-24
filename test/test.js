import { assert } from 'chai'; // Importing chai correctly
import app from '../app'; // Ensure that 'app' is correctly exported from '../app'

describe('Simple test', function() {
    it('should return hello message', function() {
        assert.equal(app(), 'Hello, Github Actions!');
    });
});
