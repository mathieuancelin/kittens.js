Kittens.js
-------------------

Kittens.js is a dumb library to show kittens running on your webpage.

```
npm install --save kittens
```

or import the script from npmcdn with

```html
<script src="https://npmcdn.com/kittens/dist/kittens.min.js"></script>
```

```javascript
// Kittens is also expose in the global scope
// but if you use modules
var Kittens = require('kittens');

var kittens1 = Kittens.run(); // show 0 kittens
var kittens2 = Kittens.run(42); // show 42 kittens
var kittens3 = Kittens.run({
  kittens: 42, // show 42 kittens
  baseIncrement: 7, // base speed (around 7 pixels per tick)
  gif: 'http://.../cat.gif', // use custom gif
  gifWidth: 50,
  gifHeight: 50
});

kittens1.add(3); // add 3 kittens
kittens1.remove(2); // remove 2 kittens

kittens1.stop(); // stop animation and remove kittens
kittens2.stop();
kittens3.stop();
```
