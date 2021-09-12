import { ImCross, ImCheckmark } from 'react-icons/im';
import styles from './TodoItem.module.css';

import { ITask } from '../../Types/interfaces';

interface Props {
    task: ITask;
    markDone(taskToDelete: ITask): void;
    removeTask(taskToDelete: ITask): void;
}

export const TodoItem = ({ task, markDone, removeTask }: Props) => {


    return (
        <div className={styles.todoItem}>
            <div>
                <span
                    // onClick={() => markDone(task)}
                    style={{ textDecoration: task.done ? "line-through" : "", fontWeight: "bold", fontSize: "1.5rem" }}
                >{task.taskName}</span>
            </div>
            <div style={{display: "flex"}}>
                <span onClick={() => markDone(task)} className={styles.todoItem__action}>
                    <ImCheckmark />
                </span>
                <span onClick={() => removeTask(task)} className={styles.todoItem__action}>
                    <ImCross />
                </span>
            </div>
        </div>
    )
}