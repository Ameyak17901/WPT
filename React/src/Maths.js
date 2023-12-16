export default function Maths(props) {

    let num1 = props.num1 // 30
    let n2 = props.num2 // 20 
    let op = props.op // '-'
    let result
    switch (op) {
        case "+": result = num1 + n2; break;
        case "-": result = num1 - n2; break;
        case "*": result = num1 * n2; break;
        case "/": result = num1 / n2; break;
        default: break;
    }

    return (
        <>
            <p>{num1}{op}{n2}={result}</p>
        </>
    )
}