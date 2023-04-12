import React, { useState } from 'react';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem } from './styles.js';

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "aulas de React no DevClub", finished: true }])
  const [task, setTask] = useState('')

  const inputValue = (event) => {
    setTask(event.target.value)
  }

  const buttonClick = () => {
    setList([...list, { id: uuid(), task: task, finished: false }])
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputValue} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>
          {list.map(item => (
          <ListItem isFinished={item.finished} key={item.id}>
            <FcCheckmark />
            <li>{item.task}</li>
            <FcEmptyTrash />
          </ListItem>
        ))}
        </ul>
      </ToDoList>
    </Container>

  )
}

export default App
