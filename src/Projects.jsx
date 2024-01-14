import React from 'react'

const Projects = () => {
  return (
   <div >
    <h1 className='project'>Projects</h1>
    <div className='mainproject'>
      
        <div className='project1'>
          <img  className="projectimg" src="https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-3d-rendering-of-calculator-symbol-against-a-black-background-image_3782739.jpg" alt="" />
          
          <h1 className='projecttext'>Calculator</h1><ul className='projectul'><li>Calculator by using HTML, CSS & JavaScript.</li>
          <li>Full customisable.</li></ul>
          <a  href="https://github.com/Rakesh-3557/Calculator.git"><button className='projectbutton'>Githhub</button>
          </a>
        </div>
        <div className='project1'>
       
          <img  className="projectimg" src="https://img.freepik.com/premium-psd/notepad-with-list-coffee_23-2148528652.jpg?w=360" alt="" />
          <h1 className='projecttext'>MVC-TodoApp</h1><ul className='projectul'>
            <li>MVC-TodoApp by using Servlet & Spring.</li>
          <li>Functionality of Session Tracking.</li></ul>
          <a  href="https://github.com/Rakesh-3557/MVC-TodoApp.git"><button className='projectbutton'>Githhub</button>
          </a>
        </div>
        <div   className='project1'>
       
          <img  className="projectimg" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV0ZmxpeHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          <h1 className='projecttext'>Netflix Clone</h1> <ul className='projectul'><li>Netflix Clone by using React.js.</li>
          </ul>
          
          <a  href="https://github.com/Rakesh-3557/netflix_clone.git"><button className='projectbutton'>Githhub</button>
          </a>
        </div>
    </div>
    </div>
    
  )
}

export default Projects