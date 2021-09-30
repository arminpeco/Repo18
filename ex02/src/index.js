
// only change code below this line 
function* myGenerator()
{
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}
function* insideGenerator1()
{
    for (let i = 1; i <= 5; i++) {
        yield x=i;
        
    }

}
function* insideGenerator2()
{
    for (let i = 10; i <= 15; i++) {
        yield x=i;
        
    }


}
function* insideGenerator3()
{
    for (let i = 6; i <= 9; i++) {
        yield x=i;
        
    }


}
const iterator=myGenerator();
let fifteenArray=[];
for (let i = 0; i < iterator.length; i++) {
    fifteenArray.push(iterator.next());
    
}
for (let it of iterator) {
   console.log(it);
    
}
// only change code below this line 
module.exports={fifteenArray,myGenerator};