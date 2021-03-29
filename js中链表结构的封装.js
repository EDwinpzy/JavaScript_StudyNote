//封装链表类
function LinkedList() {
    //内部的类：节点类
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    //属性
    this.head = null;
    this.length = 0;

    //1、append方法：向链表尾部追加节点
    LinkedList.prototype.append = function (data) {
        //1.创建新节点
        var newNode = new Node(data);
        //2.判断是否添加的是第一个节点
        if (this.length === 0) {
            //2.1 是第一个节点
            this.head = newNode;
        } else {
            //2.1 不是第一个节点
            var current = this.head;
            // 找到最后一个节点
            while (current.next) {
                current = current.next;
            }
            //最后一个节点的next指向新的节点
            current.next = newNode;
        }
        //3 链表长度加1
        this.length++;
    };

    //2、toString方法
    LinkedList.prototype.toString = function () {
        //1.定义变量
        var current = this.head;
        var listString = "";

        //2.循环一个个节点
        while (current) {
            listString += current.data + " ";
            current = current.next;
        }
        return listString;
    };

    //3、insert方法:把数据插入当前链表的某个位置
    LinkedList.prototype.insert = function (position, data) {
        //1.对position进行越界判断
        if (position < 0 || position > this.length) {
            return null;
        }

        //2.根据data创建newNode
        var newNode = new Node(data);

        //3 插入节点
        //情况1：插入position=0的值
        if (position === 0) {
            newNode.next = this.head.next;
            this.head = newNode;
        } else {
            //情况2: 插入position>0的值
            var index = 0;
            var current = this.head;
            while (index < position - 1) {
                current = current.next;
                index++;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        //4、length+1
        this.length++;
        return true;
    };
    //4、get方法:获取某个位置的元素
    LinkedList.prototype.get = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) {
            return null;
        } else {
            //2.获取对应的data
            var current = this.head;
            var index = 0;
            while (index < position) {
                current = current.next;
                index++;
            }
            return current.data;
        }
    };
    //5、indexOf方法:返回某个元素在链表中的位置
    LinkedList.prototype.indexOf = function (data) {
        //1.定义变量
        var current = this.head;
        var index = 0;

        //2.开始查找
        while (current) {
            if (current.data === data) {
                return index;
            }
            current = current.next;
            index++;
        }
        //3.没有找到 返回-1
        return -1;
    };
    //6、update方法：修改某个位置的元素
    LinkedList.prototype.update = function (position, newData) {
        //1.越界判断
        if (position < 0 || position >= this.length) {
            return false;
        } else {
            //2.查找正确的节点
            var current = this.head;
            var index = 0;
            while (index < position) {
                current = current.next;
                index++;
            }
            //3.将position位置的node的data修改成newData
            current.data = newData;
            return true;
        }
    };
    //7、removeAt方法：移除某个位置的元素
    LinkedList.prototype.removeAt = function (position) {
        //1.越界判断
        if (position < 0 || position >= this.length) {
            return false;
        } else {
            if (position === 0) {
                //2.如果position = 0
                this.head = this.head.next;
            } else {
                //3.如果position ！= 0
                var index = 0;
                var current = this.head;
                while (index < position - 1) {
                    current = current.next;
                    index++;
                }
                current.next = current.next.next;
            }
            this.length--;
        }
    };
    //8、remove方法：移除数据为data的元素
    LinkedList.prototype.remove = function (data) {
        //1.获取data在列表中的位置
        var position = this.indexOf(data);
        return this.removeAt(position);
        this.length--;
    };
    //9、isEmpty方法，判断链表是否为空
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    //10、size方法，返回链表包含的元素个数
    LinkedList.prototype.size = function () {
        return this.length;
    };
}
//创建列表对象
let list = new LinkedList();
//向链表中填充数据
for (let i = 0; i < 10; i++) {
    list.append(i);
}
let cur = list.head;
let end = list.head;
//找到列表尾部
while (end) {
    end = end.next;
}
//指向链表第四项
for (let i = 0; i < 3; i++) {
    cur = cur.next;
}
cur.next = cur.next.next;
console.log(list.toString());
