let a = function() {
    let result = new Array();
    for(var i=0; i<10; i++){
        result[i] = function() {
            return i;
        }
    }
    return result;
}
console.log(a());