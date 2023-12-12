let callback = () => { console.log("hi") }

let intervalid = setInterval(callback, 1000)

setTimeout(() => {
    console.log("timer over")
    clearInterval(intervalid)
}, 3000)
// clearInterval(intervalid)
console.log("prog ends")

