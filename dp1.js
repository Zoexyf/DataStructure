//动态规划
//1.最长公共子序列

  //  1.1初始化一个二维数组 和两个变量
function lcs(word1, word2) { 
    var max = 0
    var index = 0
    var lcsarr = new Array(word1.length + 1); 
    for (var i = 0; i < word1.length; ++i) { 
        lcsarr[i] = new Array(word2.length + 1); 
        for (var j = 0; j <= word2.length + 1; ++j) {
            lcsarr[i][j] = 0; 
        } 
    }

  //  1.2构建用于保存字符匹配记录的表
    for (var i = 0; i <= word1.length; i++) { 
        for (var j = 0; j <= word2.length; j++) { 
            if (i == 0 || j == 0) { 
                lcsarr[i][j] = 0 
            } else { 
                if (word1[i - 1] == word2[j - 1]) { 
                    lcsarr[i][j] = lcsarr[i - 1][j - 1] + 1; 
                } else { 
                    lcsarr[i][j] = 0; 
                } 
            }if (max < lcsarr[i][j]) { 
                max = lcsarr[i][j];
                index = i; 
            } 
        } 
    }
    
    var str = ""; 
    if (max == 0) { 
        return ""; 
    } else { 
        for (var i = index - max; i <= max; ++i) {
            str += word2[i]; 
        }
        return str;
    } 
}

var word1='abbcc'
var word2='dbbcc'
var str=lcs(word1,word2)
console.log(str)

// 报错，0的边界问题