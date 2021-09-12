import React, { useState, ChangeEvent } from 'react';
import { ITask } from '../../Types/interfaces';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todo.module.css';
import { TodoItem } from '../../Components/TodoItem/TodoItem'

export const Todo = () => {
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
        <div className={styles.todo}>
            <div className={styles.todo__addButton}>
                <input type="text" placeholder="ADD TODO" onChange={handleInputChange} value={task} className={styles.todo__input} />
                <button onClick={handleSubmitTask} className="submit-button">Add Todo</button>
            </div>
            <div className={styles.task__list}>
                {
                    todoList.map(item => {
                        return <TodoItem task={item} removeTask={removeTask} markDone={markDone}/>
                    })
                }
            </div>
        </div>
    )
}