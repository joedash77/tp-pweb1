import React from 'react'

function ListaTareas() {
  return (
    <div>
        <ul className='tareas'>
            <li className='completed'><div className='div'><input type="checkbox" className='checkbox'/>completed task 1 </div><img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
            <li className='item'><div className='div'><input type="checkbox" className='checkbox'/>task 2 </div> <img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
            <li className='completed'><div className='div'><input type="checkbox" className='checkbox'/> completed task 3 </div><img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
            <li className='item'><div className='div'><input type="checkbox" className='checkbox'/>task 4 </div> <img className="img" src="https://cdn-icons-png.flaticon.com/512/4812/4812459.png" alt="" /></li>
        </ul>
    </div>
  )
}

export default ListaTareas