
/*

let sk = [30,4,5,5,4,2,]
console.log(sk);
console.log(sk[0]);
console.log(sk.length)
sk[0]=91
console.log(sk);


*/

// arrow function

/*

function sum(a,b){          on the funcation we are discribe it as it
    return a + b                       |
}                                        |  the below statment is the arrow function which some of advance topic of arrow funcation....





const sum = (a,b) =>{
    return a + b
}
 app.get("/" ,( req , res ) => {

 })


const ans = sum(1,3)
console.log(ans);

*/

/*
// map

// given an array which multiplay it by 2 give back a newarray..
 
 let input = [1,2,3,4,5];

//soluation
const newarray =[]

for( let i=0; i<input.length; i++){                      it a basic soluation of it now below we used the map of array..
    newarray .push(input[i]*2)

}

console.log(newarray);
*/

// other soluation

// let input1 =[1,2,3,4,5];
 
// const ans = input1.map(function(i){
//     return i*3
// })

// console.log(ans);



// filtering
//  in given input the values give back a even values..
/*
const input3 =[1,2,3,4,5]

const newarray=[]

for (let i = 0; i<input3.length; i++){
    if(input3[i]%2 ==0){
        newarray.push(input3[i]);

    }
}
console.log(newarray);

*/

const are = [1,2,3,4,5]

const ans = are.filter(function(n) {
    if(n%2 == 0){
        return true;
     } else {
            return false;
        }
 });

 console.log(ans);
