
const Input = ({type, placeholder, color = "black"}) => {
  return (
        <input type={type} placeholder={placeholder} name="" id="" className='border-amber-700 border-4' style={{
            color: color
        }}/>
  )
}

export default Input
