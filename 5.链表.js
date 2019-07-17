function LinkedList(){
    var Node=function(element){//表示要加入的项
        this.element=element
        this.next=null
    }

    var length= 0
    var head=null

    //append(element):向链表尾部追加元素
    this.append= function(element){
        var node = new Node(element),current
        if(head==null){
            head=node
        }else{
            current=head

            while(current.next){
                current=current.next
            }
            current.next=node
        }
        
        length=length+1
    }
    //insert(position,element):向列表的特定位置插入一个新的项
    this.insert= function(position,element){
        if(position>=0&&position<=length){
            var node=new Node(element),
            current=head,
            previous,
            index=0;

            if(position===0){
                node.next=current
                head=node
            }else{
                while(index++<position){
                    previous=current
                    current=current.next
                }
                node.next=current
                previous.next=node
            }
            length++
            return true
        }else{
            return false
        }

    }

    this.toString = function(){
        var current = head,
        string =''
        while(current){
            string =current.element
            current = current.next
        }
        return string
    }
    this.removeAt=function(position){

    }
    this.remove=function(element){
        var index=this.indexOf(element)
        return this.removeAt(index)
    }
    this.indexOf=function(element){
        var current=head,
        index=-1;

        while(current){
            if(element=== current.element){
                return index
            }
            index++;
            current = current.next
        }
        return -1
    }


}

// var list=new LinkedList()
// list.append(15)
// list.append(10)
// console.log(list)