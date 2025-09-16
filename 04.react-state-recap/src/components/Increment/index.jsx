
const Increment = ({ setCount}) => {
  return (
    <button onClick={()=>setCount((prevCount)=>prevCount + 1)}>
      +
    </button>
  )
}

export default Increment
