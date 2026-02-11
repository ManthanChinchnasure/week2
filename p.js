// Chapter 2PS
// Problem No 1

/*
let age = prompt("What is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age lies between 10 and 20")
}
else {
  console.log("Your age doesnt lies between 10 and 20")
}
*/

// Problem No 2
/*
let age = prompt("What is your age?")
switch (age) {
  case '12':
    console.log("Your age is 12")
    break
  case '13':
    console.log("Your age is 13")
    break
  case '14':
    console.log("Your age is 14")
    break
  case '15':
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}
*/
// Problem No 3

let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3")    // it work on browser only ..because promptfuncation has used in it..
}
else {
  console.log("Your number is not divisible by 2 and 3")
}


// Problem No 5 tenery operater
// let age = 19
// let a = age > 18 ? "You can drive" : "You cannot drive"
// console.log(a)




// swicth statment where  it have define a multiple stament...

let num1 =  prompt("what is your age")
 switch(num1) {
   case'12':
    console.log("you age is suitable for it ")
    break
   case '13' :
    console.log("your age is suitable ")
    break
    case '14' :
      console.log("it is sutaiable of it")
     break

     default :
     console.log("nothing be special")


 }