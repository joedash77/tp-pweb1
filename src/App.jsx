import React from 'react'
import "./App.css"

function App() {
  return (
    <div className='App'>  
      <h1>Lista de tareas de Joel</h1>
      <div id='align'>
        <input id='input' type="text"/> 
        <input className="button" type="button" value="ADD" />
      </div>  
      <ul className='tareas'>
        <li className='completed'><div className='div'><input type="checkbox" className='checkbox'/>completed task 1 </div><img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
        <li className='item'><div className='div'><input type="checkbox" className='checkbox'/>task 2 </div> <img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
        <li className='completed'><div className='div'><input type="checkbox" className='checkbox'/> completed task 3 </div><img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
        <li className='item'><div className='div'><input type="checkbox" className='checkbox'/>task 4 </div> <img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
      </ul>
    </div>
  )
}

export default App;