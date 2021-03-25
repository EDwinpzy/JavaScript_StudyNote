//冒泡排序
// 一.sort排序规则,return大于0则交换数组相邻2个元素的位置
/* 二.arr.sort(function (a,b) {})中
              a -->代表每一次执行匿名函时候，找到的数组中的当前项；
              b -->代表当前项的后一项；
         */

// 1.升序
var apple = [45, 42, 10, 147, 7, 65, -74];
// ①默认法,缺点:只根据首位排序
console.log(apple.sort());
// ②指定排序规则法,return可返回任何值
console.log(
  apple.sort(function (a, b) {
    return a - b; //若return返回值大于0(即a＞b),则a,b交换位置
  })
);

//2.降序
var arr = [45, 42, 10, 111, 7, 65, -74];
console.log(
  apple.sort(function (a, b) {
    return b - a; //若return返回值大于零(即b＞a),则a,b交换位置
  })
);
