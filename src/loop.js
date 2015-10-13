let callbacks = [];
let running = false;
let request = null;

function loop(t) {
    running = true;
    callbacks = callbacks.map(cb => cb(t) ? cb : null).filter(cb => cb);
    if (callbacks.length) {
        request = requestAnimationFrame(loop);
    } else {
        running = false;
    }
}

function register(cb) {
    callbacks.push(cb);
    if (!running) {
        request = requestAnimationFrame(loop);
    }
}

function stop() {
    cancelAnimationFrame(request);
    request = null;
    running = false;
}

function clear() {
    stop();
    callbacks = [];
}

export default {
    register,
    stop,
    clear
};
