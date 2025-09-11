import PropTypes from "prop-types"
// const Greeting = (props) => {

//   console.log(props);

//   return (
//     <>
//       <p>Hello, {props.user}</p>
//     </>
//   )
// }

// export default Greeting



// const Greeting = (props) => {

//   const { user } = props

//   return (
//     <>
//       <p>Hello, {user}</p>
//     </>
//   )
// }

// export default Greeting

const Greeting = ({ user, age = 10 }) => {
  return (
    <>
      <p>Hello, {user}. You are {age}</p>
    </>
  )
}


Greeting.propTypes = {
  user: PropTypes.string.isRequired,
  age: PropTypes.number
}

export default Greeting



