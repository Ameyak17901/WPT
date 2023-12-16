export default function Total(props) {
    let a = props.arr
    let sum = 0
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }
    return (
        <p>Addtions of elements in array is {sum}</p>
    )
}