import "./TaskList.css";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import {Link} from "react-router-dom";
import AddTask from '../AddTask/AddTask'

const TaskList = (props) => {

    if (props.tasks.length === 0) {
        return <h2 className="cost-list__fallback">タスクがありません。</h2>
    }
    const addTaskHandler = (taskData) => {
        props.onAddNewTask(taskData);
    };

    return (
        <ul className="cost-list">
            {props.tasks.map((task) => (
                <TaskItem
                    id={task.id}
                    date={task.date}
                    description={task.description && task.description}
                    amount={task.amount && task.amount}
                    class={props.class}
                />
            ))}
            <div className="add-task">
                <AddTask onAddTask={addTaskHandler}/>
            </div>
        </ul>
    );
}

export default TaskList;