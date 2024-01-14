import React from 'react'


import rak from "../src/rsources/rak.JPG";



const About = () => {
  return (
    <p>
      <h1 className='abouth1'>About</h1>

    
    <div className='aboutmain'>
      <div className='discription'>
        <h2>I am freshers graduate in Information Science & Engineering from RRIT. I am interested in Software Developer and Web Developer & am seeking exciting opportunities rlated to the same.</h2> <br /><br />

<h2>Technology excites me and I am always in awe of change it drives in the world. Certain  Skills that I have include Java, JDBC, Hibernate, Servlet, Data Structure & Algorithms, frontend(HTML, CSS), JavaScript, React.js), & backend(SQL).

 <br /><br />Outside of tech, I am a tea, cricket & music lover.</h2></div>
        <div className='photo'>   <img  className="aboutimg" src={rak} alt="" /></div>
    </div>
    </p>
  )
}

export default About