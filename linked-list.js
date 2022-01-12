console.clear();

/** Node Eelementment show function */
function Node(element){
    this.element = element;
    this.next = null;
}


// /** Create linked list Class function */
function linkedList(){
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious ;
    this.remove = remove;
    this.display = display;
}



// // Inserting New Nodes
function find(item){
    let currNode = this.head;
   while(currNode.element != item){
        currNode = currNode.next
    }
    return currNode;
}


// // Inserting
function insert(newelement,item){
    let newNode = new Node(newelement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode; 
}



// Removing Nodes from a Linked List
function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

// Remove function
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}


// // Display function create
function display(){
    let currNode = this.head;
    while(!(currNode.next == null)){
        console.log(currNode.next.element)
        currNode = currNode.next;
    }
}



var cities = new linkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.insert("head", "Conway");
cities.insert("head", "Conway");
cities.insert("head", "Conway");

cities.remove("Conway")
cities.remove("Alma")
cities.remove("head")
cities.remove("head")
cities.remove("head")
cities.display()