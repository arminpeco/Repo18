
// only change code below this line 
function* myGenerator()
{
    yield* [1,2,3,4,5];
    yield* 'Arena';
    yield* arguments;
}



const iterator=myGenerator(5,6,7);
let generatorArray=[];
for (let i = 0; i < iterator.length; i++) {
    generatorArray.push(iterator.next());
    
}
for (let it of iterator) {
    console.log(it);
     
 }
// only change code below this line 
module.exports={generatorArray,myGenerator};