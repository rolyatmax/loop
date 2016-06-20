(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
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

exports['default'] = {
    register: register,
    clear: clear
};
module.exports = exports['default'];

},{"./rAF":2}],2:[function(require,module,exports){
// using this as a module so we can mock this when testing
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = { requestAnimationFrame: requestAnimationFrame, cancelAnimationFrame: cancelAnimationFrame };
module.exports = exports["default"];

},{}]},{},[1]);
