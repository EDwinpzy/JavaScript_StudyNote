//stringify是将JavaScript对象转换成字符串
//语法：JSON.stringify(value[, replacer[, space]])
/*参数说明：value--------需要转换的JavaScript对象或数组
           replacer-----若为函数则调用该函数，将js对象中每个成员的键和值传入（第一个参数是键，第二个参数是值），返回处理后的结果；若维数组，则仅转换数组中的成员且顺序一致
           space--------指定文本的缩进
*/

//原始JSON数据
let person = {
    sex: 'man',
    name: 'Tom',
    telphones: [
        "234123423",
        "2345234523"
    ]
}
console.log(JOSN.stringify(person));
//格式化JSON后显示
console.log(JSON.stringify(person, null, 2));
//不显示telphones属性
console.log(JOSN.stringify(person, function(k, v){
    if (k === 'telphones'){
        return undefined
    }
    return v
}, 2));
//只显示某些字段
console.log(JOSN.stringify(person, ['sex'], 2));