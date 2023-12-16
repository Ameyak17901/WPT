import CaseExample from "./day 2/CaseExample"
import HalfString from "./day 2/HalfString"
import Hello from "./day 2/Hello"
import SayHi from "./day 2/SayHi"
import ShowMonthName from "./day 2/ShowMonthName"
import { useState } from "react"
export default function App1() {

    // state col --> value(color(hex value)) 
    let [col, setCol] = useState('black')

    function handler(e) {
        setCol(e.target.value)
    }
    return (
        <>
            Enter color: <input type='color' onChange={(e) => { handler(e) }}></input>
            <Hello name='Ameya' col={col}></Hello>
            <SayHi></SayHi>
            <ShowMonthName></ShowMonthName>
            <HalfString></HalfString>
            <CaseExample></CaseExample>
        </>
    )
}