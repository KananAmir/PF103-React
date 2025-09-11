import PropTypes from "prop-types"

const Button = ({text}) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-red-500 font-bold py-2 px-4 rounded">
      {text}
    </button>
  )
}


Button.propTypes = {
  text: PropTypes.string
}

export default Button
