// //  if condition 
//  let age = X ;
//    X = 24
// if (age < 18) {
//     return adult;
// }

//  console .log (x);

// promat is asking the    but it only exist on the browsers.. not in node.js it where i figoure out it .

let a = prompt ("what is your age ");
a = Number.parseInt(a);                       // whre parseInt globally define and it can convert the string into number..
console.log( typeof a);
/*
if(a>0) {
  alert("this is valid")
}                                            it is frist statment of (if statement.......)

*/

/*
if(a>45) {
  alert("this is valid")                            this is if... else statment
} else {
   alert("this is invalid")

}

*/

if(a<0){
  alert("this is  in valid age");
}

else if( a<9) {
    alert("this you can't think of drive");
}

else if ( a<18 && a>= 9){
  alert("you can think about the driving");  
}

else {
  alert(" you can drive");
}


console.log("done");
//  tenery operater
 console.log("you can be  ",( a<18? "not drive": "drive"));







//  alret is showing the infomration..  it also work on browser not in node.js 
/*
let b = alert("hi it alert");
console.log( typeof b);

*/




// have to explore the switch statement and tenery operater...