function counterfactory(seed) {
    let cnt = seed
    return function () {
        return ++cnt;
    }
}

let inc = counterfactory(100)
console.log(inc(), inc(), inc())