//语法：mapObj = new Map()，其中map对象的键值可以为任意类型
//参考：https://blog.csdn.net/houwanle/article/details/108396826?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161701488016780262574827%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=161701488016780262574827&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-5-108396826.first_rank_v2_pc_rank_v29&utm_term=js%E4%B8%ADmap
/*clear
    从映射中移除所有元素。
delete
    从映射中移除指定的元素。
forEach
    对映射中的每个元素执行指定操作。
get
    返回映射中的指定元素。
has
    如果映射包含指定元素，则返回 true。
set
    添加一个新建元素到映射。
toString
    返回映射的字符串表示形式。
valueOf
    返回指定对象的原始值。
*/

var m = new Map();
m.set(1, "black");
m.set(2, "red");
m.set("colors", 2);
m.set({x:1}, 3);

m.forEach(function (item, key, mapObj) {
    console.log(item.toString() + "\n");
});
let m = new Map();
m.set('x', 1); // 添加元素
m.delete('y'); // 删除指定元素
m.has('x'); // true 是否存在x
m.get('x'); // 1 取值