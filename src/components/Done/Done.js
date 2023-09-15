import './Done.css';
import Task from '../Task/Task';
import {useState} from "react";

function Done(props) {
    const filteredTasks = props.tasks.filter(task => {
        return task.completed
    })
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };

    return (
        <div className="important">
            <div className="content">
                <div className="container-card">
                    <div className="card-list">
                        <Task onAddTask={addTaskHandler}
                              onCompiled={props.onCompiled}
                              onFavorite={props.onFavorite}
                              onDelete={props.onDelete} cats={props.cats} tasks={filteredTasks}></Task>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Done;