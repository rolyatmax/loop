// using this as a module so we can mock this when testing
export const requestAnimationFrame = (...args) => window.requestAnimationFrame(...args);
export const cancelAnimationFrame = (...args) => window.cancelAnimationFrame(...args);
