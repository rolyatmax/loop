'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _rAF = require('./rAF');

var callbacks = [];
var request = null;

function loop(t) {
    callbacks = callbacks.map(function (cb) {
        return cb(t) ? cb : null;
    }).filter(function (cb) {
        return cb;
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

exports.default = {
    register: register,
    clear: clear
};