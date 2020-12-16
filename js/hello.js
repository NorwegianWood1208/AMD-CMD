// hello.js
define('hello', function (x, y){
  var add = function (x,y){
    console.log(x, y)
　  return x+y;
　};
  return {
　  add: add
　};
});