import React from 'react'

const Card = () => {
    return (
        <div style={{border: "1px solid", padding: "1rem", maxWidth: "300px"}}>
            <img width={300} src="https://webkul.com/blog/wp-content/uploads/2023/04/state-life-cycle.jpg" alt="react state" />
            <h2>React State</h2>
            <p>React components has a built-in state object. The state object is where you store property values that belong to the component.</p>
        </div>
    )
}

export default Card
