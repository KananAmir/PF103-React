
const IncrementByValue = ({inputValue, setInputValue, setCount}) => {
    return (
        <>
            <input type="number" onChange={(e) => {
                // setInputValue(Number(e.target.value))
                setInputValue(e.target.valueAsNumber)
            }} />
            <button onClick={() => {
                setCount((prevCount) => prevCount + inputValue)
            }}>inc by value</button>
        </>
    )
}

export default IncrementByValue
