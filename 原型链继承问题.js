//可参考 https://blog.csdn.net/weixin_36465540/article/details/89885292?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161658676616780271586175%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=161658676616780271586175&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-3-89885292.first_rank_v2_pc_rank_v29_10&utm_term=js%E4%B8%AD%E9%87%8D%E5%86%99%E8%B6%85%E7%B1%BB

//定义父类构造函数
function SuperType() {
  this.property = true;
}
//定义父类的原型对象中的方法
SuperType.prototype.getSuperValue = function () {
  return true;
};
//定义子类构造函数
function SubType() {
  this.subproperty = false;
}
//子类继承父类
SubType.prototype = new SuperType();
//往子类原型中新增方法
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
//虽然子类继承的父类中有该方法，但这里把他重写了
SubType.prototype.getSuperValue = function () {
  return false;
};
//创建子类实例
var instance = new SubType();
var instance_1 = new SuperType();
//重写的getSuperValue方法是在SubType.prototype里面，创建SubType实例从原型链下到上检索到的是重写后的getSuperValue方法，而创建的SuperType实例时重写前的
console.log(instance.getSuperValue); //false
console.log(instance_1.getSuperValue); //true

/*---------------按上面方法所创建的原型属性会被所有实例所共享，为解决这个问题可用下面方法---------------*/

//可参考 https://blog.csdn.net/ladycode/article/details/51282624?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161664691216780266293484%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161664691216780266293484&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-51282624.first_rank_v2_pc_rank_v29_10&utm_term=js%E4%B8%AD%E5%80%9F%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0

//借用构造函数

function Person(name) {
  this.city = "北京";
  this.name = name;
  this.countries = ["America", "China", "Canada"];
}

function Student(name, age) {
  //该属性作用域仍是Student
  this.city = "上海";
  //在这里借用了Person的构造函数，相当于把Person中的内容写在这里，这里还传递了子类中的name到父类中
  Person.call(this, name);
  //确保调用的父类构造函数不会重写子类的属性，可以添加子类中的属性
  this.age = age;
  //this.city="上海";//如果将新增属性放在借用函数以后，就作用在父对象中
}

var s1 = new Student("bob", 25);
s1.countries.push("india");
//这里输出的是北京，前面新增的Student实例属性并没有体现出来
console.log(s1.city);

//组合式继承
//！！！重要：创建一个新实例，其中的属性有两个来源，一个是从构造函数复制的（不同实例不会公用），一个是从原型上引用的（不同实例会共享）
function Person(name) {
  this.name = name;
  this.countries = ["America", "China", "Canada"];
}

Person.prototype.sayName = function () {
  return this.name;
};

function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}

Student.prototype = new Person();
Student.prototype.sayAge = function () {
  return this.age;
};
var s1 = new Student("bob", 25);

s1.countries.push("india");
console.log(s1.countries); //["America", "China", "Canada", "india"]
console.log(s1.name); //bob
console.log(s1.sayAge()); //25

var s2 = new Student("finnya", 23);
console.log("------------------------");
//构造函数中的属性自己用
console.log(s2.countries); //["America", "China", "Canada"]
console.log(s2.name); //finnya
//原型中的方法共享
console.log(s2.sayAge()); //23
