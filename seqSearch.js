//自组织查找--

function seqSearch(arr,data){
    for(var i=0;i<arr.length;i++){
        if(arr[i]==data){
            if(i>0){
                swap(arr,i,i-1)
            }
            return true
        }
    }
    return false
}
//改进
function seqSearch1(arr, data) { 
    for (var i = 0; i < arr.length; ++i) { 
        if (arr[i] == data && i > (arr.length * 0.2)) { 
            swap(arr,i,0)
            return true
        }else if (arr[i] == data) { 
            return true 
        } 
    }
    return false
}



function swap(arr,a,b){
    var temp
    temp=arr[a]
    arr[a]=arr[b]
    arr[b]=temp

}

var arr=[3,4,5,6,7,3,2,5]
data=2
console.log(seqSearch(arr,data))
console.log(arr)