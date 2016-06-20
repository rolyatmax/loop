"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    requestAnimationFrame: function requestAnimationFrame(cb) {
        return setTimeout(function () {
            return cb(1234);
        }, 16);
    },
    cancelAnimationFrame: function cancelAnimationFrame(token) {
        return clearTimeout(token);
    }
};