// nn bb ss u
// n number,null
// b boolen,bigint value number
// s string,symbol
// u undefined


let a = null;
let b = 33;
let c = true; // it can be false because of using boolen values
let d = BigInt(444);
let e = "string";
let f= ("it can a symboal of it ");
let g= undefined

console.log(a,b,c,d.e,f,g);

// object in js 

const item ={
    "sooo" : true,
    "shasd":false,
    age :44,
    name:"viky"
}
console .log (item.name);


// object which is nested format in it which we have  done with in it 
const ab = {
    name:"abcd",
    age:45,
    City: "pune",
     address:{
        plot_no:23,
        line : 2,
        socity_name:"om sai"
     }
    
}


// the method which should we have be with in it 
   const address =ab.address.line;
   console.log(address);


// it is differnt example

  const user1 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city = user1.address.city;
console.log(city);