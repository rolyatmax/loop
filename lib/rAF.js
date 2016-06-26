"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// using this as a module so we can mock this when testing
var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame() {
  var _window;

  return (_window = window).requestAnimationFrame.apply(_window, arguments);
};
var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame() {
  var _window2;

  return (_window2 = window).cancelAnimationFrame.apply(_window2, arguments);
};