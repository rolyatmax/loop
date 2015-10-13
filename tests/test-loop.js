/* globals jest describe it expect */

jest.dontMock('../src/loop');

// must use `require` as `import` is always hoisted
let {register, clear} = require('../src/loop');


describe('loop register', function() {
    it('should return an unregister function', function() {
        let unregister = register(() => null);
        expect(typeof unregister).toBe('function');
    });
});
