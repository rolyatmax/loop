/* globals jest describe it expect */

jest.dontMock('../src/loop');

let {register, stop, clear} = require('../src/loop');


describe('loop register', function() {
    it('should return an unregister function', function() {
        let unregister = register(() => null);
        expect(typeof unregister).toBe('function');
    });
});
