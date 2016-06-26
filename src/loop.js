import {requestAnimationFrame, cancelAnimationFrame} from './rAF';


export function createLoop() {
    let callbacks = [];
    let request = null;

    function loop(t) {
        callbacks = callbacks.filter(cb => cb(t));
        request = callbacks.length ? requestAnimationFrame(loop) : null;
    }

    function register(cb) {
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

    function clear() {
        cancelAnimationFrame(request);
        request = null;
        callbacks = [];
    }

    return {register, clear};
}
