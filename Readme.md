
# map

  A curried map function that works with Functors

## Installation

  Install with [component(1)](http://component.io):

    $ component install jasonkuhrt/map

  Install with [npm(1)](http://npmjs.org):

    $ npm install jasonkuhrt/map

## Examples
```js
var map = require('map');
var add = require('add');
var add1 = add(1);



map(add1, [1,2,3]);
// [1,2,3]
```
```js
// First, curry map to a specialty version
var map_add1 = map(add1);

map_add1([1,2,3]);
// [2,3,4]
```


## License

  BSD-2-Clause