import Button from "../Button"
import Navbar from "../Navbar"

function Welcome() {
    const username = "Daniz"

    // React Fragment

    return (
      <>
        <div>Welcome, {username}</div>
        <p>Lorem ipsum dolor sit.</p>
        <Button />
      </>
    )
}

export default Welcome
