console.clear();
//Queues Algorithms

function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.lenght = length;
    this.clear = clear;
}

// Array Data Store Function
function enqueue(ele){
   this.dataStore.push(ele);
}


// Array Data Store for Delete Function
function dequeue(){
    return this.dataStore.shift();
}



// Array First Data Show Function
function front(){
    return this.dataStore[0];
}


// Array Back Data Show Function
function back(){
    return this.dataStore[this.dataStore.lenght - 1]
}



// Array Length Function
function length(){
    return this.dataStore;
}



// Array clear Function
function clear(){
    this.dataStore = [];
    this.lenght = 0;
}



// Array elment show Function
function toString(){
    return this.dataStore;
}




// Array elment show Function
function empty(){
    if(this.dataStore.lenght == 0){
        return true;
    }else{
        return false;
    }
}


// Constrouctor Function Implementation
let Queues = new Queue();


// insert or enqueue insertion
Queues.enqueue('Singh')
Queues.enqueue('Roy')
Queues.enqueue('Borrmon')
Queues.enqueue('chondor')
console.log(Queues.toString())

// delete or dequeue insertion
Queues.dequeue()
console.log(Queues.toString())

// front insertion
console.log(Queues.front())

// dack insertion
console.log(Queues.back())