import "./index.css"

const Button = (props) => {

    const handleClick = () => {
        window.alert("You clicked me!")
    }

    return (
        <button onClick={handleClick}>{props.text || "Click Me"}</button>
    )
}

export default Button
