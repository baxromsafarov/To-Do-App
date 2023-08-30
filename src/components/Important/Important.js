import './Important.css';
import Task from '../Task/Task';
import {useState} from "react";

function Important(props) {
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };

    return (
        <div className="important">
            <div className="content">
                <div className="container-card">
                    <div className="card-list">
                        <Task onAddTask={addTaskHandler} tasks={props.tasks}></Task>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Important;