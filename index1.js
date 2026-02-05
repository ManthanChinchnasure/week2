function sum(a,b) {
  return a+b;
}

function sub (a,b){
    return a-b;

}

function doArithmetic(a,b,fn) {
    return fn(a,b);
}

console.log(doArithmetic(1,2,sum));