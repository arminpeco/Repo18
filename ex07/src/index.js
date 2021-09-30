
// only change code below this line 

const numberArray=[9,5,4,11,5,12,13,15,4,2,5];
const uniqueArray=new Set(numberArray.sort(function(a,b){return a-b}));
console.log(uniqueArray);

// only change code below this line 
module.exports={numberArray,uniqueArray};