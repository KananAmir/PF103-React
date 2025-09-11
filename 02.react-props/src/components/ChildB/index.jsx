import React from 'react'
import ChildC from '../ChildC'

const ChildB = ({sName}) => {
  return (
    <div>
        B
      <ChildC sName={sName}/>
    </div>
  )
}

export default ChildB
