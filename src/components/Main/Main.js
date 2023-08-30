import {NavLink} from 'react-router-dom';
import Task from '../Task/Task';
import './Main.css';
import React, {useState} from 'react';


const Main = (props) => {
    const [classes, setClasses] = useState('task-item');
    const toCardHandler = () => {
        setClasses('to-card');
    }
    const classList = classes;
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };
    return (
        <>
            <div className="content">
                <div className="container-card">
                    <div className="toggle" onClick={toCardHandler}>
                        {/* <NavLink to="/main-card"> */}
                        <span className="material-symbols-outlined cards">
                            dashboard_customize
                        </span>
                        {/* </NavLink> */}
                    </div>
                    <div className="card-list">
                        <Task class={classList} onAddTask={addTaskHandler} tasks={props.tasks}></Task>
                    </div>
                </div>
            </div>

        </>

    );

}

export default Main;