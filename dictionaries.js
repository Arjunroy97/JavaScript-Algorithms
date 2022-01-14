console.clear();
/** Dictionaries */




// The Dictionary Class
function Dictionary(){
    this.dataStore = new Array();
    this.add = add;
    this.remove = remove;
    this.find = find;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;

}



// function to define is add()
function add(key, value){
    this.dataStore[key] = value;
}


// function to define is find()
function find(key){
    return this.dataStore[key];
}



// function to define is remove()
function remove(key){
   delete this.dataStore[key];
}



// function to define is count()
function count(){
    let n = 0;
    for(let key in Object.keys(this.dataStore)){
        ++n
    }
    return n;
}




// function to define is clear()
function clear(){
    for(let key of Object.keys(this.dataStore)){
     delete this.dataStore[key]
    }
}



// function to define is outpur funciton 
function showAll(){
    for(let [key,value] of Object.entries(this.dataStore).sort()){
        console.log(`This is ${key} => ${value}`)
    }
}

let d = new Dictionary();

d.add('name','Arjun Singh')
d.add('names','Samir Roy')
d.add('nameed','Sorna Rani')
d.add('namees','Pue Rani')
d.add('namee','Hiya Rani')
d.showAll()

// find 
// console.log(d.find('nameed'))

// // remove
// console.log(d.remove('name'))
// d.showAll()
// // Count 
// console.log(d.count())
// d.clear()
// d.showAll()



  
const inputString = 'the brown fox jumped over the blue fox,'
