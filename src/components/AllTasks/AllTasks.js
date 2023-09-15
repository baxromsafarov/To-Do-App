import '../Important/Important.css';
import Task from '../Task/Task';
import {useState} from "react";

function AllTasks(props) {
    const filteredTasks = props.tasks.filter(task => {
        return !task.completed
    })
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };

    return (
        <div className="important">
            <div className="content">
                <div className="container-card">
                    <div className="card-list">
                        <Task cats={props.cats} onCompiled={props.onCompiled}
                              onFavorite={props.onFavorite}
                              onDelete={props.onDelete} onAddTask={addTaskHandler} tasks={filteredTasks}></Task>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTasks;