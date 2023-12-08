let x = "Saurabh"
let y = new String("Saurabh")

// == checks the value of two primitive variables
// === checks values as well as address of the two variables 
if(x == y) 
    console.log('same')
else
    console.log('different')

// console.log(typeof(x), typeof(y))
z = new String("Saurabh")


// == checks address if two objects variables are used
if(y === z) 
    console.log('same')
else
    console.log('different')

// == checks value of variables    
x = "string"
y = new String("string")

console.log(x === y)

// === checks the value as well as type of variables
x = 20
y = '20'
console.log(x === y) 