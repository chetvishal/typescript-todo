import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { ITask } from './Types/interfaces';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleSubmitTask = (): void => {
    setTodoList([...todoList, { taskName: task, done: false, id: uuidv4() }])
    setTask("")
  }

  const removeTask = (task: ITask): void => {
    setTodoList(todoList => todoList.filter(item => item.id !== task.id))
  }

  const markDone = (task: ITask): void => {
    const newArr = todoList.map(item => item.id === task.id ? { ...item, done: !item.done } : item)
    setTodoList(newArr)
  }

  return (
    <div className="App">
      <input type="text" placeholder="task" onChange={handleInputChange} value={task} />
      <button onClick={handleSubmitTask}>add the task</button>
      <div className="task__list">
        {
          todoList.map(item => {
            return <div>
              <span
                onClick={() => markDone(item)}
                style={{ textDecoration: item.done ? "line-through" : "", fontWeight: "bold", fontSize: "1.5rem" }}
              >{item.taskName}</span>
              <span style={{ fontSize: "1rem", fontWeight: "bold", marginLeft: "2rem" }} onClick={() => removeTask(item)}>X</span>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
