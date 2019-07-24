function max(a, b) { 
    return (a > b) ? a : b
}

function knapsack1(capacity, size, value, n) { 
    if (n == 0 || capacity == 0) {  
        return 0
    }
    if (size[n - 1] > capacity) { 
        return knapsack1(capacity, size, value, n - 1)
    } else { 
        return max(value[n - 1] + knapsack1(capacity - size[n - 1], size, value, n - 1), 
        knapsack1(capacity, size, value, n - 1)); 
    } 
}



function dKnapsack2(capacity, size, value, n) { 
    var K = []; 
    for (var i = 0; i < capacity ; i++) { 
        K[i] = []; 
    }
    for (var i = 0; i <= n; i++) { 
        for (var w = 0; w <= capacity; w++) { 
            if (i == 0 || w == 0) { 
                K[i][w] = 0; 
            }else if (size[i - 1] <= w) { 
                K[i][w] = max(value[i - 1] + K[i-1][w-size[i-1]], K[i-1][w]); 
            }else { 
                K[i][w] = K[i - 1][w]; 
            }
            console.log(K[i][w] + " "); 
        }
        console.log(); 
    }
    return K[n][capacity]; 
}


var value = [4, 5, 10, 11, 13]; 
var size = [3, 4, 7, 8, 9]; 
var capacity = 16; 
var n = 5;
console.log("递归的方法"+knapsack1(capacity, size, value, n));
console.log("动态规划的方法"+dKnapsack2(capacity, size, value, n));