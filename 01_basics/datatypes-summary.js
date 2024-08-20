// Primitive
// 7 types : String, Number, Boolean, Null, undifined, symbol, BigInt,

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
const id = Symbol('1234')
const anotherId = Symbol('1234')
// console.log( id === anotherId);

//const bigNumber = 6574389223458765423456987



// Referencs (Non primitive)

// Array, Objects, Function

const heros = ["saktiman","nagraj","doga"];

 let myObj =  {
    name:"ankit",
    age:  20,
}

 const myFunction =  function(){
    //console.log("hello World");
    
 }

//  console.log(typeof bigNumber);
//  console.log(typeof score);
//  console.log(typeof scoreValue);
//  console.log(typeof isLoggedIn);
//  console.log(typeof outsideTemp );
//  console.log(typeof anotherId );
//  console.log(typeof myFunction );



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    // Stack (Primitive), Heap(Non -primitive) 

    let myYoutubename= "ankitdubeydotcom"

    let anotherName = myYoutubename

    anotherName = "dubey"

    console.log(anotherName);
    console.log(myYoutubename);

    let userOne = {
      email: "user@gmail.com", 
      upi: "user@ybl",  
    }
    let userTwo = userOne
    userTwo.email = "ankitdubey75@gmail.com",
    console.log(userOne.email);
    console.log(userTwo.email);
    
    
    
    
 
 
 
 
 
 
 