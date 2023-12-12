let arr = [10, 30, 45, 60]
console.log(arr)
// add element at end
arr.push(60)
console.log(arr)
// delete from the end
let v = arr.pop()
console.log(v, arr)

// delete elements from given index
let s = arr.splice(1, 2)
console.log(s, arr)

// reverses array and return mutated array
let rev = arr.reverse()
console.log(rev)

// can add multiple elements
arr.push(1, -1, 6)
console.log(arr)

// sort the array
let sorted = arr.sort((a, b) => a - b)
console.log(sorted)