'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createLoop = createLoop;

var _rAF = require('./rAF');

function createLoop() {
    var callbacks = [];
    var request = null;

    function loop(t) {
        callbacks = callbacks.filter(function (cb) {
            return cb(t);
        });
        request = callbacks.length ? (0, _rAF.requestAnimationFrame)(loop) : null;
    }

    function register(cb) {
        var running = !!callbacks.length;
        callbacks.push(cb);
        if (!running) {
            request = (0, _rAF.requestAnimationFrame)(loop);
        }

        return function remove() {
            var index = callbacks.indexOf(cb);
            if (index < 0) {
                return;
            }
            callbacks.splice(index, 1);
        };
    }

    function clear() {
        (0, _rAF.cancelAnimationFrame)(request);
        request = null;
        callbacks = [];
    }

    return { register: register, clear: clear };
}