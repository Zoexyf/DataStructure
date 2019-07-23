//排序算法
function ArrayList(){
    var array = []
    this.insert = function(item){
        array.push(item)
    }
    this.toString = function(){
        return array.join
    }

    var swap = function(index1,index2){
        var aux = array[index1]
        array[index1] = array[index2]
        array[index2] = aux
    }
}

//冒泡排序
this.bubbleSort = function(){
    var length=array.length
    for(var i=0;i<length;i++){
        for(var j=0;j<i;j++){
            if(array[j]>array[j+1])
            swap(j,j+1)
        }
    }
}