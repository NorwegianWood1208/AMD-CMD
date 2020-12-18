// js/mian.js
define(function(require, exports, module) {
    var hello = require('hello');
    console.log(hello.add(2,3));
  
    // 单独导出
    exports.init = function init() {
      console.log('init');
    }
  });

