console.clear();

/** A List Class Implementation */


function ADTList() {
    this.listSize = 0; // (property)
    this.pos  = 0; // (property)
    this.dataStore = []; // (property)
    this.clear = clear; // (Function)
    this.find = find; // (function)
    this.toString = toString; // (function)
    this.getElement = getElement; // (function)
    this.insert = insert; // (function)
    this.append = append; // (function)
    this.remove = remove; // (function)
    this.front = front; // (function)
    this.length = length; // (function)
    this.end = end; // (function)
    this.prev = prev; // (function)
    this.next = next; // (function)
    this.currPos = currPos; // (function)
    this.moveTo = moveTo; // (function)
    this.contains = contains; // (function)
    this.length = length; // (function)
}



// Append: Adding an Element to a Lis
function append(addItem){
    this.dataStore[this.listSize++] = addItem;
}



// Find: Finding an Element in a List
function find(findItem){
    for(let i = 0; i < this.dataStore.length;++i){
        if(this.dataStore[i] === findItem){
            return i
        }
    }
    return -1;
}



// Remove: Removing an Element from a List
function remove(item) {
    let foundAt = this.find(item);
    if(foundAt > -1){
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
    }
    return false;
}


// Length: Determining the Number of Elements in a List
function length () {
    return this.listSize;
} 


// toString: Retrieving a List’s Elements
function toString() {
    return this.dataStore;
}




// Insert: Inserting an Element into a List
function insert(item, afterItem){
    let insertPos = this.find(afterItem);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1,0,item);
        ++this.listSize;
        return true;
    }
    return false;
}



// Clear: Removing All Elements from a List
function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0
}



// Contains: Determining if a Given Value Is in a List
function contains(item) {
    for(let i = 0; i < this.dataStore.length;++i){
        if(this.dataStore[i] === item){
            return true;
        }
    }
    return false
}



/** Traversing a List */

// front function
function front() {
    this.pos = 0;
}

// end function
function end(){
    this.pos = this.listSize - 1;
}


// prev function
function prev(){
    if(this.pos > 0){
        --this.pos;
    }
}


// next function
function next(){
    if(this.pos < this.listSize - 1){
        ++this.pos
    }
}


// currPos funciton
function currPos(){
    return this.pos;
}

// moveTo funcion
function moveTo(position){
    this.pos = position;
}



// getElement function
function getElement(){
    return this.dataStore[this.pos]
}






// hear output 
const Names = new ADTList();
Names.append("Arjun Singh")
Names.append("Samir Borrmon")
Names.append("Pue Rani")
Names.append("Hiya Rani")
Names.append("sorna Rani")
console.log(Names.toString())

Names.front()
console.log(Names.getElement())

Names.next()
Names.next()
console.log(Names.getElement())

Names.end()
console.log(Names.getElement())

Names.prev()
console.log(Names.getElement())

Names.currPos()
console.log(Names.getElement())




/** Iterating Through a List */

// forword loop
for(Names.front(); Names.currPos() < Names.length();Names.next()){
    // console.log(Names.getElement())
}

// backword loop
for(Names.end(); Names.currPos() >= 0; Names.prev()){
    // console.log(Names.getElement())
}