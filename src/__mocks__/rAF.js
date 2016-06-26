export const requestAnimationFrame = (cb) => setTimeout(() => cb(1234), 16);
export const cancelAnimationFrame = (token) => clearTimeout(token);
