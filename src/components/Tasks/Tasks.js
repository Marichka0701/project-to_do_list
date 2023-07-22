import React, {useContext, useEffect, useState} from 'react';

import '../reset.css';
import styles from './Tasks.module.css';
import {ContextTodo} from "../../pages/TodoListPage/TodoListPage";
import Task from "./Task/Task";

const Tasks = () => {
    const [id, setId] = useState(0);

    // const initialState = {
    //     // id: setId(id + 1),
    //     task: 'To do something To do something To do something',
    // }
    //
    // const allTodos = useContext(ContextTodo);
    // console.log('alltodos', allTodos)
    //
    //
    // const [todos, setTodos] = useState([initialState, initialState, initialState]);


    const { todos } = useContext(ContextTodo);
    //
    // useEffect(() => {
    //     console.log('render tasks ')
    // }, [todos])
    // console.log(todos);

    return (
        <div className={styles.listTasks}>
            {
                todos.map(task => <Task key={task} task={task}/>)
            }
        </div>
    );
};

export default Tasks;