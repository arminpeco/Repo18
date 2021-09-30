// only change code below this line 

let shoppingList =  new Map(
    [
        [1,"Banana"],
        [2,"Pineapple"],
        [3,"Pear"],
        [4,"Carrot"],
        [5,"Apple"],
    ]
)
let arrKey=[];
for (const it of shoppingList.entries()) {
   arrKey.push(it[0]);
}
for (const it of shoppingList) {
    console.log(`groceries: ${it[1]}`);
}
let arrValue=[];
for (const it of shoppingList.entries()) {
    arrValue.push(it[1]);
}
for (const it of shoppingList) {
    console.log(`amount: ${it[0]}`);
}
for (const it of shoppingList) {
    console.log(`[${it[1]} , ${it[0]}]`);
}
// only change code below this line 

module.exports={shoppingList,arrKey,arrValue};