import { useState } from "react";
import { useEffect } from "react"

const Card = () => {

    const [inputValue, setInputValue] = useState('');
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("Card Mounted");
    //  }, [])

    //  console.log("Card Rendered");
     
    // useEffect(() => {
    //     console.log("Card Mounted");


    //     //cleanup function
    //     return () => {
    //         console.log("Card Unmounted");
    //     }
    // }, [])

    useEffect(() => {
        console.log("Card Updated");
    }, [inputValue, count])

    return (
        <div style={{ border: "1px solid", textAlign: 'center', padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h3>React Component Lifecycle</h3>
            <p>The React component lifecycle describes the series of phases a React component undergoes from its creation to its removal from the DOM. </p>
            <img style={{ width: "100%" }} src="https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png" alt="component lifecycle" />


            <input type="text" placeholder='text here..' value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}/>

            <hr />

            <h3>your value: {inputValue}</h3>
            <hr />
            <button onClick={()=>setCount((prevCount)=>prevCount+1)}>{count}</button>

        </div>
    )
}

export default Card
