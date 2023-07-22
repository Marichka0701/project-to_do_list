import React, {createContext, useState} from 'react';
import AddTask from "../../components/AddTask/AddTask";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tasks from "../../components/Tasks/Tasks";
import styles from './TodoListPage.module.css';

export const ContextTodo = createContext([]);

const TodoListPage = () => {
    const [sidebarClosed, setSidebarClosed] = useState(false);
    const [mainPartClosed, setMainPartClosed] = useState(false);
    const [wrapperClosed, setWrapperClosed] = useState(false);

    const propsForSidebar = {
        sidebarClosed,
        setSidebarClosed,
        mainPartClosed,
        setMainPartClosed,
        wrapperClosed,
        setWrapperClosed,
    }

    const [todos, setTodos] = useState([]);
    const [editTask, setEditTask] = useState(null);
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <div className={`${styles.wrapper} ${wrapperClosed ? `${styles.close}` : ''}`}>
                <Sidebar props={propsForSidebar}/>
                <div className={`${styles.mainPart} ${mainPartClosed ? `${styles.close}` : ''}`}>
                    <ContextTodo.Provider value={{todos, setTodos, editTask,setEditTask, isActive, setIsActive}}>
                        <Tasks />
                        <AddTask />
                    </ContextTodo.Provider>
                </div>
            </div>
        </div>
    );
};

export default TodoListPage;