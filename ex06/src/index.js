// only change code below this line 


let rockStar =  new Map(
    [
        ["artist","The Rolling Stones"],
        ["song","Angie"],
        ["album","Goats Head Soup"],
        ["singer","Mick Jagger"],
       
    ]
)


let newRock =  new Map();
let keys=[...rockStar.keys()];
let values=[...rockStar.values()];

for (let i = 0; i < keys.length; i++) {
    if (!keys[i].includes("a")) {
        newRock.set(keys[i],values[i]);
    }
 
}
for (let value of newRock) console.log(newRock);

// only change code below this line 

module.exports={rockStar,newRock};