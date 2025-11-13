import { useState } from "react"

function Counter({ min, max }) {
    const [value, setvalue] = useState(0)
    //const[state_name,set_func_name]=useState(initial_val)

    let inc = () => {
        if (value < max) {
            setvalue(value + 1)
        }
    }

    function dec() {
        if (value > min) {
            setvalue(value - 1)
        }
    }

    return (<div>
        <button onClick={dec} >-</button>
        <span>{value}</span>
        <button onClick={inc}>+</button>
    </div>
    )
}

export default Counter