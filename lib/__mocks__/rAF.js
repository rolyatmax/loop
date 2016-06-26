"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame(cb) {
  return setTimeout(function () {
    return cb(1234);
  }, 16);
};
var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame(token) {
  return clearTimeout(token);
};