import { useState } from "react"
import Increment from "../Increment"
import Decrement from "../Decrement"
import Count from "../Count"
import IncrementByValue from "../IncrementByValue"

const Counter = () => {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState(0)

    // const handleIncrement = () => {
    //     // setCount(count + 1)
    //     setCount((prevCount) => prevCount + 1)
    // }
    const handleDecrement = () => {
        // setCount(count - 1)
        setCount((prevCount) => prevCount - 1)
    }

    return (
        <div>
            {/* <button onClick={handleIncrement}>+</button> */}
            <Increment setCount={setCount}/>
            {/* <h2>{count}</h2> */}
            <Count count={count}/>
            {/* <button onClick={handleDecrement}>-</button> */}
            <Decrement handleDecrement={handleDecrement}/>
            <hr />
            {/* <input type="number" onChange={(e)=>{
                // setInputValue(Number(e.target.value))
                setInputValue(e.target.valueAsNumber)
            }}/>
            <button onClick={()=>{
                setCount((prevCount)=>prevCount + inputValue)
            }}>inc by value</button> */}
            <IncrementByValue inputValue={inputValue} setInputValue={setInputValue} setCount={setCount}/>
        </div>
    )
}

export default Counter
