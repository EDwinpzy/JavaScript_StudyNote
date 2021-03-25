//substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
//substring() 方法用于提取字符串中介于两个指定下标之间的字符。

var string = "helloworld!";
var str1 = string.substr(3,4);   //从索引3开始，指定长度为4
console.log(str1);           //lowo
var str2 = string.substring(3,4);   //从索引3开始，下标为4截止
console.log(str2);           //l