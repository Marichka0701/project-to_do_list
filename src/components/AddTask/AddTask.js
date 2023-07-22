import React, {useContext, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {AiOutlinePlus} from "react-icons/ai";

import '../reset.css';
import styles from './AddTask.module.css';
import {ContextTodo} from "../../pages/TodoListPage/TodoListPage";

const AddTask = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setValue,
    } = useForm();

    const {todos, setTodos, editTask, setEditTask, isActive, setIsActive} = useContext(ContextTodo);

    const edit = async (data) => {
        const selectedTask = todos.at(todos.indexOf(editTask));
        setValue('task', selectedTask);
        const newTodos = todos.map(item => item);
        const index = newTodos.indexOf(editTask);
        newTodos[index] = await data?.task;
        setTodos(newTodos);
    }

    const add = async (data) => {
        setTodos([...todos, data.task]);
    }
    const save = async (data) => {
        isActive ? edit(data) : add(data);
        isActive && setIsActive(false);
        reset();
    }

    const setDataIntoInput = async (data) => {
        const selectedTask = todos.at(todos.indexOf(editTask));
        setValue('task', selectedTask);
    }

    useEffect(() => {
        isActive && setDataIntoInput();
    }, [isActive])

    return (
        <div className={styles.addTask}>
            <div className={styles.plusContainer}>
                <AiOutlinePlus className="plus"/>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(save)}>
                <input className={styles.inputTask}
                       {...register('task',
                           {required: true})}
                       placeholder="Add task..."
                       autoComplete='off'
                />
                <button
                    className={styles.button}
                    type='submit'
                > {isActive ? 'Edit' : 'Add task'}
                </button>
            </form>
        </div>
    );
};

export default AddTask;