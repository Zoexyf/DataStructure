//二分查找
function binSearch(arr, data) { 
    var upperBound = arr.length-1
    var lowerBound = 0
    while (lowerBound <= upperBound) { 
        var mid = Math.floor((upperBound + lowerBound) / 2)
        if (arr[mid] < data) { 
            lowerBound = mid + 1
        }else if (arr[mid] > data) { 
            upperBound = mid - 1
        }else { 
            return mid
        } 
    }return -1
}

var nums = [2,4,7,12,45,66,78,90,113,345,433,556,775,998]; 
// for (var i = 0; i < 100; ++i) {
//     nums[i] = Math.floor(Math.random() * 101)
//     }insertionsort(nums)
//     dispArr(nums)
    console.log()
    console.log(" 输入一个要查找的值：val")
    // var val = parseInt(readline())
    var val=775
    var retVal = binSearch(nums, val)
    if (retVal >= 0) { 
       console.log(" 已找到 " + val + " ，所在位置为：" + retVal)
    }else { 
       console.log(val + " 没有出现在这个数组中。")
    }