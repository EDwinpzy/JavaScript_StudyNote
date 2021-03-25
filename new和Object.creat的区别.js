//new是创建一个实例然后用构造函数初始化，指向构造函数的原型
//Object.creat是以其参数为原型创建对象，这种方式也叫原型式继承
var o = Object.create(null);
console.log(o); // {}
o.name = 'ming';
//以o为原型创建对象
var o2 = Object.create(o);
console.log(o2); // {}
//name属性继承自o
console.log(o2.name); // 'ming', 