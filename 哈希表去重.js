var arrNew = [{'num':1},[1,2,3],{'num':1},{'num':'1'},'呵呵',[1,2,3],[2,3,4,5],1,'呵呵',2,3,'hehe',[2,3,4,5],'hehe','你好'];

//利用哈希表 复杂数组去重
    function dedup(arr) {
        let hashTable = {};
        //filter对数组中的每一个值执行其内部的回调函数，若回调函数返回值为true，则将该数组元素储存到一个新的数组中
        return  arr.filter(el =>{
            let key = JSON.stringify(el);
            let match = Boolean(hashTable[key]);
            console.log(hashTable[key]);
            //console.log(match)
            return (match ? false : hashTable[key] = true);
        })
    }
    console.log(dedup(arrNew)); //[ { num: 1 },[ 1, 2, 3 ],{ num: '1' },'呵呵',[ 2, 3, 4, 5 ],1,2,3,'hehe','你好' ]