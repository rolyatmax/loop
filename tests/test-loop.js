/* globals jest describe it expect */

jest.dontMock('../src/loop');

// must use `require` as `import` is always hoisted
let {register, clear} = require('../src/loop');
let {requestAnimationFrame} = require('../src/rAF');


describe('loop', function() {
    it('should return an unregister function which removes the callback', function() {
        let cb = jest.genMockFn();
        let unregister = register(cb);
        expect(cb.mock.calls.length).toBe(0);
        unregister();
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(0);
    });

    it('should run the registered callback on the next tick', function() {
        let cb = jest.genMockFn();
        cb.mockReturnValue(false);
        register(cb);
        expect(cb.mock.calls.length).toBe(0);
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(1);
    });

    it('should run the registered callback until it returns false', function() {
        let cb = jest.genMockFn();
        cb
            .mockReturnValueOnce(true)
            .mockReturnValue(false);
        register(cb);
        expect(cb.mock.calls.length).toBe(0);
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(2);
    });

    it('should not run the registered callback after it has returned false', function() {
        let cb = jest.genMockFn();
        cb.mockReturnValue(false);
        register(cb);
        expect(cb.mock.calls.length).toBe(0);
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(1);

        let cbTwo = jest.genMockFn();
        cbTwo.mockReturnValue(false);
        register(cbTwo);
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(1);
        expect(cbTwo.mock.calls.length).toBe(1);
    });

    it('should not run the registered callback after it has returned false', function() {
        let cb = jest.genMockFn();
        let cbTwo = jest.genMockFn();
        cb
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(true)
            .mockReturnValue(false);
        cbTwo
            .mockReturnValueOnce(true)
            .mockReturnValue(false);

        register(cb);
        register(cbTwo);
        expect(cb.mock.calls.length).toBe(0);
        expect(cbTwo.mock.calls.length).toBe(0);
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(4);
        expect(cbTwo.mock.calls.length).toBe(2);
    });

    it('should pass a timestamp into the callback', function() {
        let cb = jest.genMockFn();
        cb.mockReturnValue(false);
        register(cb);
        expect(cb.mock.calls.length).toBe(0);
        jest.runAllTimers();
        expect(typeof cb.mock.calls[0][0]).toBe('number');
    });

    it('should remove all callbacks with clear()', function() {
        let cb = jest.genMockFn();
        cb.mockReturnValue(false);
        register(cb);
        expect(cb.mock.calls.length).toBe(0);
        clear();
        jest.runAllTimers();
        expect(cb.mock.calls.length).toBe(0);
    });
});
