/*闭包是指有权利访问另一个函数作用域中的变量的函数
参考： https://blog.csdn.net/u010176097/article/details/80401161?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161673692816780264027620%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161673692816780264027620&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-80401161.first_rank_v2_pc_rank_v29_10&utm_term=js%E4%B8%AD%E9%97%AD%E5%8C%85
*/
function createCompareFunction(propername) {
    //返回值中的匿名函数就是一个闭包，可调用外部函数中的propername（作用域链原理）
    return function (obj1, obj2) {
        var value1 = obj1[propername];
        var value2 = obj2[propername];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}
var value1 = obj1[propername];
var value2 = obj2[propername];
if (value1 < value2) {
    return -1;
} else if (value1 > value2) {
    return 1;
} else {
    return 0;
}
