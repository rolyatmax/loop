"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// using this as a module so we can mock this when testing
exports.default = { requestAnimationFrame: requestAnimationFrame, cancelAnimationFrame: cancelAnimationFrame };