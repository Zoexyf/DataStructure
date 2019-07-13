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
    this.insert= function(position,element){}
    this.removeAt=function(position){}
    this.remove=function(element){}
    this.indexOf=function(element){}


}