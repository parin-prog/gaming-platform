import { Navbar } from "../components/Navbar"
import Section from "../components/Section"
import About from "../components/About"
import './Front.css'

const Front = () => {

  return (
    <div className="front">
      <Navbar />
      <Section />
      <About />
    </div>
  )
}

export default Front