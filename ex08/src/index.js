
// only change code below this line 
let one = new Set([1,2,3,4,5]);
let two = new Set([6,4,3,2]);
let unionSet = new Set([...one,...two]);
let intersectionSet=new Set([...one].filter(function(n) {
    return [...two].indexOf(n) !== -1;
}));
let differenceSet=new Set([...one].filter(x=>![...two].includes(x)));

// only change code below this line 

module.exports={unionSet};