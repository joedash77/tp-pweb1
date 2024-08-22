import React from 'react'
import "./App.css"
import AgregarTarea from './components/AgregarTarea';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className='App'>  
      <h1>Lista de tareas de Joel</h1>
        <AgregarTarea/>
        <ListaTareas/>
    </div>
  )
}

export default App;