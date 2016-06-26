import {requestAnimationFrame, cancelAnimationFrame} from './rAF';


let callbacks = [];
let request = null;

function loop(t) {
    callbacks = callbacks.map(cb => cb(t) ? cb : null).filter(cb => cb);
    request = callbacks.length ? requestAnimationFrame(loop) : null;
}

export function register(cb) {
    let running = !!callbacks.length;
    callbacks.push(cb);
    if (!running) {
        request = requestAnimationFrame(loop);
    }

    return function remove() {
        let index = callbacks.indexOf(cb);
        if (index < 0) {
            return;
        }
        callbacks.splice(index, 1);
    };
}

export function clear() {
    cancelAnimationFrame(request);
    request = null;
    callbacks = [];
}
