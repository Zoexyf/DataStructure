//快速排序

// var a=[]
// for (var i = 0; i < 10; ++i) { 
//     a[i] = Math.floor((Math.random()*100)+1); 
// }

function qSort(arr) {
    if (arr.length <= 1)
        return

    var left = []
    var right = []
    var pivot = arr[0]

    for (var i = 0; i < arr.length; i++) {
        console.log(i + "次循环")

        if (arr[i] < pivot) {
            left.push(arr[i])
            console.log("left:" + arr[i])
        } else {
            right.push(arr[i])
            console.log("right:" + arr[i])
        }
    }
    // qSort(left)
    // qSort(right)
    // console.log(qSort(left))

    return qSort(left).concat([pivot], qSort(right))
}

var arr = [5, 6, 7, 33, 22, 56, 77, 2, 1, 35]

// console.log(a); 
// console.log(); 
console.log(qSort(arr))