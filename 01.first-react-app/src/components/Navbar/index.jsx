import Button from "../Button"
import "./index.css"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <h2>ReactJS</h2>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="login-register">
                        <Button text={"Login"}/>
                        <Button text={"Register"}/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
