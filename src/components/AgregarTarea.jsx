import React, { useState } from 'react'

function AgregarTarea({onAdd}) {
  const[newTask, setNewTask] = useState('');

  const manejarCambio = (e) => {
    setNewTask(e.target.value);
  };

  const handleClick = () => {
    if(newTask.trim() !== ''){
      onAdd(newTask);
      setNewTask('');
    }
  }

  return (
    <div>
      <input  
          type="text"
          value={newTask}
          onChange={manejarCambio}
          placeholder="Nueva tarea..."
          style={{marginRight: '10px', padding: '5px'}}
      />
      <button onClick={handleClick} style={{padding: '5px 10px'}}>Add </button>
    </div>
  )
}

export default AgregarTarea