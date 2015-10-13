# loop
An object that registers callbacks for a single requestAnimationFrame loop.

```javascript
import {register, clear, stop} from 'loop';

// returns a function which can be called to unregister the callback
// passed to this register function
// timestamp is the value normally passed to requestAnimationFrame callbacks
let unregister = register(timestamp => {
    // should return a boolean indicating if the callback should be called on the next frame
    return shouldKeepLooping;
});

stop(); // stops the loop
clear(); // stops the loop and clears out all registered callbacks
```
