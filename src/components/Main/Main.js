import {NavLink} from 'react-router-dom';
import Task from '../Task/Task';
import './Main.css';
import React, {useState} from 'react';


const Main = (props) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0);

    const filteredTasks = props.tasks.filter(task => {

        const taskDeadline = new Date(task.task_deadline);
        taskDeadline.setHours(0, 0, 0, 0);

        if (taskDeadline <= today && !(task.completed == 1 ? true : false) ) {
            return true;
        }

        return false;
    });


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
                    {/* <div className="toggle" onClick={toCardHandler}>
                        <span className="material-symbols-outlined cards">
                            dashboard_customize
                        </span>
                    </div> */}
                    <div className="card-list">
                        <Task class={classList}
                              onCompiled={props.onCompiled}
                              onFavorite={props.onFavorite}
                              onDelete={props.onDelete}
                              onAddTask={addTaskHandler}
                              tasks={filteredTasks}
                              cats={props.cats}></Task>
                    </div>
                </div>
            </div>

        </>

    );

}

export default Main;