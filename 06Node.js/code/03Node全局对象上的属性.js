console.log(__dirname); // D:\yjxz\Review_outline\yjxz\front\06node.js\code
console.log(__filename); // D:\yjxz\Review_outline\yjxz\front\06node.js\code\03Node全局对象上的属性.js

console.log("abc");
/*
setTimeout(function () {
    console.log("123");
}, 2000);
 */
setInterval(function() {
    console.log("123");
}, 1000);