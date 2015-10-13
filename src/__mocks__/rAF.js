export default {
    requestAnimationFrame: cb => setTimeout(() => cb(1234), 16),
    cancelAnimationFrame: token => clearTimeout(token)
};
