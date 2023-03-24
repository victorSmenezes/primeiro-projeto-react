import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Terminar as aulas de React no DevClub" }])
  const [task, setTask] = useState('')

  const inputValue = (event) => {
    setTask(event.target.value)
  }

  const buttonClick = () => {
    setList([...list,{ id: uuid(), task: task}]) 
   }

  return (
    <div>
      <input onChange={inputValue} placeholder="O que tenho que fazer..." />
      <button onClick={buttonClick}>Adicionar</button>

      <ul>{
        list.map(item => (
          <li key={item.id}>{item.task}</li>
        ))
      }
      </ul>
    </div>

  )
}

export default App
