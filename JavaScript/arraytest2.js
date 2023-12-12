let arr = [{ fname: "Ameya", lname: "Kulkarni", age: 22 }, { fname: "Saurabh", lname: "Khartode", age: 23 }, { fname: "Vyenktesh", lname: "Mohite", age: 24 }]
let sorted = arr.sort((o1, o2) => {
    if (o1.age < o2.age) return -1;
    else if (o1.age > o2.age) return 1;
    else return 0;
})
console.log(sorted)




//forEach function callback function
arr = [10, 30, 45]
arr.forEach((ele) => { console.log(ele); })


// map function accepts callback function
let squares = arr.map((ele) => { return Math.pow(ele, 2); })
console.log(squares)

// filter function 
let a = arr.filter((ele) => ele > 30)
console.log(a)

// reduce function
// let sum = arr.reduce((prev, cur) => prev + cur, 0)
// console.log(sum)

