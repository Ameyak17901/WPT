function reverse(str1, cbf1) {
    let reversestr = ''
    for (let i = str1.length - 1; i >= 0; i--) {
        reversestr += str1.charAt(i)
    }
    setTimeout(cbf1(reversestr), 2000)
}
module.exports = reverse;