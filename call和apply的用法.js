//call的语法    obj1.call(obj2, arg1, arg2, ...)
//              将obj1的方法放到obj2上使用，后面是传入的参数
//apply和call类似，只是传入的参数必须是数组

function add (x, y) 
{ 
    console.log (x + y);
} 
function minus (x, y) 
{ 
    console.log (x - y); 
} 
add.call (minus , 1, 1);    //2 

//做继承用
function myfunc1(){
    this.name = 'Lee';
    this.myTxt = function(txt) {
        console.log( 'i am',txt );
    }
}
//继承了myfunc1中的属性和方法
function myfunc2(){
    myfunc1.call(this);
}
var myfunc3 = new myfunc2();
myfunc3.myTxt('Geing'); // i am Geing
console.log (myfunc3.name);	// Lee