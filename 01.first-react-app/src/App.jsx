import "./App.css"
import Card from "./components/Card"
import Input from "./components/Input"
import Navbar from "./components/Navbar"
import Welcome from "./components/Welcome"
function App() {

  return (
    <>
      <div>
        <Navbar />
        <hr />
        <Welcome />
        <hr />
        <Card/>
        <hr />
        <Input />
      </div>
    </>
  )
}

export default App




