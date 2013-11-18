curry = require('curry');

var exists = function(a){
  return a !== undefined || a !== null;
}



// map :: Functor f => (a -> b) -> f a -> f b

module.exports = curry(function(f, functor){
  if (!exists(functor.map)) throw new Error('Given functor is not actually a functor because it lacks a map implementation');
  return functor.map(f);
});