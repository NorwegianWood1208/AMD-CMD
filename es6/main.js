/** 引用模块 **/
import hello from './js/hello.js';
function test() {
    console.log(hello.age)
    return hello.add(20, hello.age);
}
console.log(test())