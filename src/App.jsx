import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button } from './styles.js';

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Terminar as aulas de React no DevClub" }])
  const [task, setTask] = useState('')

  const inputValue = (event) => {
    setTask(event.target.value)
  }

  const buttonClick = () => {
    setList([...list, { id: uuid(), task: task }])
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputValue} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>{
          list.map(item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
