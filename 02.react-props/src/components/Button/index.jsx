import React from 'react'

const Button = ({text}) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-red-500 font-bold py-2 px-4 rounded">
      {text}
    </button>
  )
}

export default Button
