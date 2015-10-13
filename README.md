# loop
An object that registers callbacks for a single requestAnimationFrame loop.

```javascript
import {register, clear, stop} from 'loop';

// returns a function which can be called to unregister the callback
// passed to this register function
let unregister = register(t => {
    // do stuff here
    return shouldKeepAnimating;
});

stop(); // stops the loop
clear(); // stops the loop and clears out all registered callbacks
```
