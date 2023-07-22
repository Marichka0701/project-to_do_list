import React, {useContext} from 'react';

import '../reset.css';
import styles from './Tasks.module.css';
import {ContextTodo} from "../../pages/TodoListPage/TodoListPage";
import Task from "./Task/Task";

const Tasks = () => {
    const { todos } = useContext(ContextTodo);

    return (
        <div className={styles.listTasks}>
            {
                todos.map(task => <Task key={task} task={task}/>)
            }
        </div>
    );
};

export default Tasks;