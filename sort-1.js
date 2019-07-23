//初始化数组
function CArray(numElements) { 
    this.dataStore = []
    this.pos = 0
    this.numElements = numElements
    this.insert = insert
    this.toString = toString
    this.clear = clear
    this.setData = setData
    this.swap = swap
    this.bubbleSort =bubbleSort
    this.selectionSort=selectionSort
    this.insertSort=insertSort
    this.mergeSort = mergeSort
    this.mergeArrays = mergeArrays
    this.qSort = qSort
    for ( var i = 0; i < numElements; ++i ) { 
        this.dataStore[i] = i
    } 
}

function setData() { 
    for ( var i = 0; i < this.numElements; ++i ) { 
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    } 
}

function clear() { 
    for ( var i = 0; i < this.dataStore.length; ++i ) { 
        this.dataStore[i] = 0
    } 
}

function insert(element) {
    this.dataStore[this.pos++] = element
}

function toString() { 
    var restr = ""
    for ( var i = 0; i < this.dataStore.length; ++i ) { 
        restr += this.dataStore[i] + " "
        if (i > 0 & i % 10 == 0) { 
            restr += "\n"
        } 
    }
    return restr
}

function swap(arr, index1, index2) { 
    var temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

//冒泡排序(优化后的)
function bubbleSort() { 
    var numElements = this.dataStore.length
    var temp 
    for ( var i = 0; i < numElements; i++) { 
        for ( var j = 0; j < numElements-i-1 ; j++ ) { 
            if (this.dataStore[j] > this.dataStore[j + 1]) {
                swap(this.dataStore, j, j + 1); 
            } 
        } 
    } 
}

//选择排序
function selectionSort() { 
    var min, temp
    //此处的i到倒数第二个就可以
    for (var i = 0; i < this.dataStore.length-1; i++) { 
        min = i
        for (var j = i ; j < this.dataStore.length; j++) { 
            if (this.dataStore[j] < this.dataStore[min]) { 
                min = j
            }
            if(i!==min){
                swap(this.dataStore, i, min)
            }
        } 
    } 
}

//插入排序

function insertSort(){
    var temp,j
    for (var i = 1;i < this.dataStore.length; i++) {
        j=i
        temp = this.dataStore[i]
      
        while( j>0 && (this.dataStore[j - 1]>temp)){
            this.dataStore[j] = this.dataStore[j - 1]
            j--
        }
        this.dataStore[j] = temp
    }

}

//归并排序 复杂度为O(nlog^n)
//这种方式是使用迭代法，循环的方式；递归深度太深不利于使用
function mergeSort(){
    if(this.dataStore.length<2){
        return
    }
    var step=1
    var left,right
    while(step<this.dataStore.length){
        left=0
        right =step
        while(right + step <= this.dataStore.length){
            mergeArrays(this.dataStore, left, left+step, right, right+step)
            left = right + step
            right = left + step
        }
        if(right<this.dataStore.length){
            mergeArrays(this.dataStore, left, left+step, right, this.dataStore.length)
        }
        step*=2
    }

}
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) { 
    var rightArr = new Array(stopRight - startRight + 1)
    var leftArr = new Array(stopLeft - startLeft + 1)
    k = startRight
    for (var i = 0; i < (rightArr.length-1); ++i) { 
        rightArr[i] = arr[k]
        ++k
    }
    k = startLeft
    for (var i = 0; i < (leftArr.length-1); ++i) { 
        leftArr[i] = arr[k]
        ++k
    } 
rightArr[rightArr.length-1] = Infinity; // 哨兵值 
leftArr[leftArr.length-1] = Infinity; // 哨兵值 
var m = 0
var n = 0
for (var k = startLeft; k < stopRight; ++k) { 
    if (leftArr[m] <= rightArr[n]) { 
        arr[k] = leftArr[m]
        m++
    }else { 
        arr[k] = rightArr[n]
        n++
    } 
}
console.log("left array - ", leftArr)
console.log("right array - ", rightArr)
}


//快速排序
function qSort() { 
    if(this.dataStore.length==0){
        return
    }
    var left = [] 
    var right = []
    var pivot = this.dataStore[0]
    for (var i = 1; i < this.dataStore.length; i++){
        if (this.dataStore[i] < pivot) {
            left.push(this.dataStore[i])
        } else { 
            right.push(this.dataStore[i])
        } 
    }
    return qSort(left).concat(pivot, qSort(right))
}

   




var numElements = 10
var myNums = new CArray(numElements)
myNums.setData()
console.log(myNums.toString())
// myNums.bubbleSort()
// console.log(myNums.toString())
// myNums.selectionSort()
// console.log(myNums.toString())
// myNums.insertSort()
// console.log(myNums.toString())
// myNums.mergeSort()
// console.log(myNums.toString())
 myNums.qSort()
// console.log(myNums.toString())

