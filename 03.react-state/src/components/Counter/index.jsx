import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => {
        // setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
    }
    const handleDecrement = () => {
        // setCount(count - 1)
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <h2>{count}</h2>
            <button onClick={handleDecrement}>-</button>
            <hr />
            <input type="number" onChange={(e)=>{
                // setInputValue(Number(e.target.value))
                setInputValue(e.target.valueAsNumber)
            }}/>
            <button onClick={()=>{
                setCount((prevCount)=>prevCount + inputValue)
            }}>inc by value</button>
        </div>
    )
}

export default Counter
