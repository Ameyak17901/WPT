import { useState } from 'react'
export default function ShowMonthName() {


    // [a,b] = arr 
    // a = arr[0], b = arr[1]
    let [v, setV] = useState('')


    return (
        <div>
            <select onChange={(e) => {
                let val = parseInt(e.target.value)
                switch (val) {
                    case 1: setV('January'); break;
                    case 2: setV('February'); break;
                    case 3: setV('March'); break;
                    case 4: setV('April'); break;
                    case 5: setV('May'); break;
                    case 6: setV('June'); break;
                    case 7: setV('July'); break;
                    case 8: setV('August'); break;
                    case 9: setV('September'); break;
                    case 10: setV('October'); break;
                    case 11: setV('November'); break;
                    case 12: setV('December'); break;
                    default: break;
                }
            }}>
                <option>select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
            <p>Month: {v}</p>
        </div>
    )
}