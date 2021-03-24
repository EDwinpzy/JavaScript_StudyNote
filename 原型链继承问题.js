//可参考 https://blog.csdn.net/weixin_36465540/article/details/89885292?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161658676616780271586175%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=161658676616780271586175&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-3-89885292.first_rank_v2_pc_rank_v29_10&utm_term=js%E4%B8%AD%E9%87%8D%E5%86%99%E8%B6%85%E7%B1%BB

//定义父类构造函数
function SuperType() {
    this.property = true;
}
//定义父类的原型对象中的方法
SuperType.prototype.getSuperValue = function() {
    return true;
}
//定义子类构造函数
function SubType() {
    this.subproperty = false;
}
//子类继承父类
SubType.prototype = new SuperType();
//往子类原型中新增方法
SubType.prototype.getSubValue = function() {
    return this.subproperty;
}
//索然子类继承的父类中有该方法，但这里把他重写了
SubType.prototype.getSuperValue = function() {
    return false;
}
//创建子类实例
var instance = new SubType();
var instance_1 = new SuperType();
//重写的getSuperValue方法是在SubType.prototype里面，创建SubType实例从原型链下到上检索到的是重写后的getSuperValue方法，而创建的SuperType实例时重写前的
console.log(instance.getSuperValue);  //false
console.log(instance_1.getSuperValue);    //true