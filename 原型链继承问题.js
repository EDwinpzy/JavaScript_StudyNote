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
alert(instance.getSuperValue);  //false
alert(instance_1.getSuperValue);    //true