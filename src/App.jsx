import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem, NoTask, Trash, Check, Footer, Link } from './styles.js';

function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  const inputValue = (event) => {
    setTask(event.target.value)
  }

  const buttonClick = () => {
    if (task) {
      setList([...list, { id: uuid(), task: task, finished: false }])
    }
  }

  const finishTask = (id) => {

    const newList = list.map(item => (
      item.id == id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  const deleteTask = (id) => {

    const newList = list.filter(item => (
      item.id != id
    ))
    setList(newList)
  }



  return (
    <Container>
      <ToDoList>
        <Input onChange={inputValue} placeholder="O que tenho que fazer..." />
        <Button onClick={buttonClick}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finishTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteTask(item.id)} />
              </ListItem>
            )))
            : (
              <NoTask>Digite uma tarefa, atividade, lembrete...</NoTask>
            )
          }
        </ul>
        
      </ToDoList>

      <Footer>
        &copy;<Link href="https://www.linkedin.com/in/victor-santos-de-menezes/" target="_blank">Victor Santos</Link>
      </Footer>

    </Container>

  )
}

export default App
