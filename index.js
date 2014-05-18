'use strict';

var purry = require('purry');



// map :: Functor f => (a -> b) -> f a -> f b

module.exports = purry(function(f, functor){
  if (!exists(functor.map)) throw new Error('Given functor is not actually a functor because it lacks a map implementation');
  return functor.map(f);
});



function exists(a){
  return a !== undefined || a !== null;
}