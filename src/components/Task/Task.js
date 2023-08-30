import './Task.css';
import {useState} from "react";
import Card from "../UI/Card";
import TaskList from "./TaskList"

function Task(props) {
    const [selectedYear, setSelectedYear] = useState('2023');

    const filteredTasks = props.tasks.filter(task => {
        return task.date?.getFullYear().toString() === selectedYear;
    })

    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };
    return (
        <div>
            <div className="costs">
                <TaskList class={props.class} onAddNewTask={addTaskHandler} tasks={filteredTasks}/>
            </div>
        </div>
    );
}

export default Task;