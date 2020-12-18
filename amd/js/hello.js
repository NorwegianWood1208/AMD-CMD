// hello.js
define('hello', function (x, y){
  var add = function (x,y){
    console.log(x, y) // 1, 2
　  return x+y;
　};
  return {
　  add: add
　};
});