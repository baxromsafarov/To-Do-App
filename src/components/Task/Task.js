import './Task.css';
import {useState} from "react";
import Card from "../UI/Card";
import TaskList from "./TaskList"

function Task(props) {
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };
    return (
        <div>
            <div className="costs">
                <TaskList class={props.class}
                          onCompiled={props.onCompiled}
                          onFavorite={props.onFavorite}
                          onDelete={props.onDelete}
                          onAddNewTask={addTaskHandler}
                          tasks={props.tasks}
                          cats={props.cats}/>
            </div>
        </div>
    );
}

export default Task;