/* globals jest describe it expect */

jest.dontMock('../src/loop');

// must use `require` as `import` is always hoisted
let {register, clear} = require('../src/loop');


describe('loop register', function() {
    it('should return an unregister function', function() {
        let unregister = register(() => null);
        expect(typeof unregister).toBe('function');
    });

    // More tests
    // ----------
    // register should add a callback
    // that callback should be run on the animation frame
    // returning false from the callback should cause it to be removed
    // returning true from the callback should cause it to be called again on the next tick
    // the callback should have a timestamp value passed into it
    // register should start the loop
    // the loop should stop running if all callbacks have been removed
    // unregister should remove the callback
    // clear should stop the loop and remove all callbacks
});
