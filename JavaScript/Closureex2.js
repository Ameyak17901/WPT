function counterfactory(seed) {
    let cnt = seed;
    function incrementor() {
        return ++cnt;
    }
    return incrementor;
}
let result = counterfactory(100);
cnt = 99
console.log(result(), result(), result());