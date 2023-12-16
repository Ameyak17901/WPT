import { useState } from 'react'

export default function SayHi() {

    // let arr = useState('')
    let [msg, setMsg] = useState('')
    // arr = [msg, setMsg] 
    // msg --> value setMsg --> function which sets the value of msg
    function handler() {

        //arr[1]('hi')
        // msg = ''
        console.log(msg)
        setMsg('hi')
        //msg = 'hi'
    }

    return (
        <div>
            <button onClick={handler}>say hi</button>
            {/* <p>{arr[0]}</p> */}
            <p>{msg}</p>
        </div>
    )
}