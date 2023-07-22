import React, {useContext, useEffect} from 'react';

import styles from './Task.module.css'
import editIcon from './images/edit-icon.png'
import closeIcon from './images/close-icon.png'
import {ContextTodo} from "../../../pages/TodoListPage/TodoListPage";

const Task = ({task}) => {
    const { todos, setTodos, editTask, setEditTask, isActive, setIsActive } = useContext(ContextTodo);

    // useEffect(() => {
    //
    // }, [todos])
    const handleDelete = () => {
        const deletedTask = todos.at(todos.indexOf(task));
        setTodos(todos.filter(item => item !== deletedTask))
    };

    const handleEdit = () => {
        const editedTask = todos.at(todos.indexOf(task));
        setEditTask(editedTask);
        setIsActive(true);
    };

    return (
        <div className={styles.task}>
            <p> {task} </p>
            <div className={styles.instruments}>
                {/*<GrEdit />*/}
                <button className={styles.button} onClick={handleEdit}>
                    <img className={styles.editIcon} src={editIcon} alt="edit icon"/>
                </button>
                {/*<span>&#10005;</span>*/}
                <button className={styles.button} onClick={handleDelete}>
                    <img className={styles.closeIcon} src={closeIcon} alt="close icon"/>
                </button>
            </div>
        </div>
    );
};

export default Task;