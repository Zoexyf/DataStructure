//创建BinarySearchTree类
//声明结构
function BinarySearchTree(){
    
    this.root = null
    this.insert = insert
    this.inOrderTraverse = inOrderTraverse
    this.preOrderTraverse = preOrderTraverse
    this.postOrderTraverse = postOrderTraverse
    this.min=min
    this.max=max
    this.search=search
    this.remove=remove
}

function Node(key,left,right){
    this.key=key
    this.left=left
    this.right=right
    this.show = show
}
function show() { 
    return this.key
}

//将要实现的功能
//insert(key)
function insert(key){
    var n=new Node(key,null,null)
    if(this.root==null){
        this.root=n
    }else{
        var current = this.root
        var parent
        while (true) { 
            parent = current
            if (key < current.key) { 
                current = current.left; 
                if (current == null) { 
                    parent.left = n
                    break
                }
            }else{
                current = current.right
                if (current == null) { 
                    parent.right = n; 
                    break;
                }
            }     
        }
    }
    
}



//inOrderTraverse中序遍历

function inOrderTraverse(node){
    if (!(node == null)) { 
        inOrderTraverse(node.left); 
        console.log(node.show() + " "); 
        inOrderTraverse(node.right); 
    }
}


//preOrderTraverse先序遍历
function preOrderTraverse(node){
    if(node!==null){
        console.log(node.show()+" ")
        preOrderTraverse(node.left)
        preOrderTraverse(node.right)

    }

}



//postOrderTraverse后序遍历
function postOrderTraverse(node){
    if(node!==null){
    postOrderTraverse(node.left)
    postOrderTraverse(node.right)
    console.log(node.show()+" ")
    }
}


//search(key)
function search(key){
    var current = this.root
    while(current!=null){
        if(current.key==key){
            return current
        }else if(key<current.key){
            current=current.left
        }else{
            current=current.right
        }
    }
    return null
}

//min
function min(){
    var current=this.root
    while(!(current.left==null)){
        current=current.left
    }
    return current.key
}
//max
function max(){
    var current=this.root
    while(!(current.right==null)){
        current=current.right
    }
    return current.key
}

//remove(key)
function remove(key){
    root = removeNode(root,key)
}

function removeNode(node,key){
    if(node==null){
        return null
    }

    if(key==node.key){
        //无左无右
        if(node.left==null&&node.right==null){
            return null
        }//左无或右
        if(node.left==null){
            return node.right
        }else if(node.right==null){
            return node.left
        }//有左有右
        var tempNode = min(node.right)
        node.key = tempNode.key
        node.right = removeNode(node.right, tempNode.key)
        return node
    }else if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
    }else { 
        node.right = removeNode(node.right, key)
        return node
    }

}


var tree=new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.insert(6);

// console.log('inOrder:')
// inOrderTraverse(tree.root)
// console.log('preOrder:')
// preOrderTraverse(tree.root)
// console.log('postOrder:')
// postOrderTraverse(tree.root)

var minKey=tree.min()
console.log('min:'+minKey)
var maxKey=tree.max()
console.log('max:'+maxKey)
var searchKey = tree.search(11)
console.log(searchKey?'key 11 found':'key 11 not found')

tree.remove(12)
inOrderTraverse(tree.root)

// console.log("remove12:"+tree.root)
