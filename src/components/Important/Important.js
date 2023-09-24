import './Important.css';
import Task from '../Task/Task';
import {useState} from "react";

function Important(props) {
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };


    const filteredTasks = props.tasks.filter(task => {
        if (task.completed == 1 ? true : false) return false
        return task.favorite == 1 ? true : false
    })

    return (
        <div className="important">
            <div className="content">
                <div className="container-card">
                    <div className="card-list">
                        <Task onCompiled={props.onCompiled}
                              onFavorite={props.onFavorite}
                              onDelete={props.onDelete}
                              onAddTask={addTaskHandler} tasks={filteredTasks}
                              cats={props.cats}></Task>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Important;