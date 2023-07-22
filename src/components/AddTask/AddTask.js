import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {ContextTodo} from "../../pages/TodoListPage/TodoListPage";
import {AiOutlinePlus} from "react-icons/ai";

import '../reset.css';
import styles from './AddTask.module.css';

const AddTask = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue,
    } = useForm();

    const {todos, setTodos, editTask, setEditTask, isActive, setIsActive} = useContext(ContextTodo);
    const addTask = (data) => {
        // console.log(data.taskDescription);

        setTodos([...todos, data.task]);
        // console.log(todos);
        reset();
        isActive && setIsActive(false);
    }

    const setDataIntoInput = (data) => {
        let selectedTask = todos.at(todos.indexOf(editTask));
        setValue('task', selectedTask);
        // console.log('edit', data);
        // setTodos[...todos, selectedTask = data];
        // let newTodos = todos.map(item => item);
        // [...newTodos, selectedTask = data]
        // setIsActive(false);
    }
    isActive && setDataIntoInput();

    return (
        <div className={styles.addTask}>
            <div className={styles.plusContainer}>
                <AiOutlinePlus className="plus"/>
            </div>
            {/*<p> Add a Task </p>*/}
            {/*handleSubmit(isActive ? `${setDataIntoInput}` : `${addTask}`)*/}
            <form className={styles.form} onSubmit={isActive ? handleSubmit(setDataIntoInput) : handleSubmit(addTask)}>
                <input className={styles.inputTask}
                       {...register('task',
                           {required: true})}
                       placeholder="Add task..."
                       autoComplete='off'
                />
                <button
                    className={styles.btnAddTask}
                > {isActive ? 'Edit' : 'Add task'}
                </button>
            </form>
        </div>
    );
};

export default AddTask;