function add(x,y){
    return x + y
}

// let result = add()
// let result = add(10)
// let result = add(10,20)
// let result = add(10,20,30,40,50)
// console.log(result)

function sum(x=10,y=20){
    return x + y
}

// let result = sum()
// let result = sum(40)
// let result = sum(12,23)
// console.log(result)

function total(...nums){
    console.log(typeof nums)
    let sum = 0
    for(let i=0; i<nums.length; i++){
        sum += nums[i]
    }
    return sum
}

let result = total(10,20,30,40,50,60)
console.log(result,typeof result)

let st = "Saurabh"
console.log(st,typeof st)
st = `My name is 
      Ameya Kulkarni `
console.log(st, typeof st)      
st = new String("Ameya")
console.log(st,typeof st)

let x = [12,20,30]
console.log(x, typeof x, x[0])