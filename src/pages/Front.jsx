import { Navbar } from "../components/Navbar"
import Section from "../components/Section"
import About from "../components/About"
import './Front.css'
import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import Community from "../components/Community"

const Front = () => {
  const location = useLocation();
  const ref = useRef(null);
  

  useEffect(() => {

    if (location.pathname === '/' && location.hash.length) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

  }, [location])

  return (
    <div className="front">
      <Navbar />
      <Section />
      <div id="1" ref={ref}>
        <About />
      </div>
      <Community />
    </div>
  )
}

export default Front