import "./About.css"
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from "react";


const About = () => {

  const ref = useRef(null);


  const { scrollYProgress } = useScroll({							// Element scrolling value
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const scaleX = useSpring(scrollYProgress, {					// Animation on scrolling
    stiffness: 300,
    damping: 40,
    restDelta: 0.001
  });

  // const fadeVariants = {
  //   initial: {
  //     opacity: 0.7
  //   },
  //   visible: {
  //     opacity: 0.3
  //   }
  // };


  return (
    <motion.div className="about-container"
        >
      <motion.div className="about"
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress
        }} >
        <motion.div className="fade" style={{opacity: scrollYProgress}}></motion.div>
        <div className="content" ref={ref}>
          <h1 className="about-title">About Us</h1>
          <div className="about-content">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <p className="about-description">Introducing Skater Republic, the thrilling upcoming arcade game that puts you right in the heart of a dynamic skateboarding adventure! Explore expansive skateparks, bustling cityscapes, and renowned real-life locations for an immersive experience like no other. Featuring intuitive controls, a sophisticated trick system, and a compelling progression framework, players will find themselves immersed in a world where every achievement feels truly gratifying. Keep an eye out as we work diligently to bring this extraordinary gaming experience to life.</p>
          </div>
  
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About