import "./TaskList.css";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import {Link} from "react-router-dom";
import AddTask from '../AddTask/AddTask'
import task from "./Task";

const TaskList = (props) => {
    const addTaskHandler = (taskData) => {
        props.onAddNewTask(taskData);
    };

    if (props.tasks.length === 0) {
        return (
            <div className="cost-list">
                <h2 className="cost-list__fallback">タスクがありません。</h2>
                <div className="add-task">
                    <AddTask onAddTask={addTaskHandler}/>
                </div>
            </div>
        )
    }
    return (
        <ul className="cost-list">
            {props.tasks.map((task) => (
                <TaskItem
                    id={task.id}
                    date={task.created_date}
                    name={task.task_name}
                    description={task.task_description && task.task_description}
                    favorite={task.favorite && task.favorite}
                    completed={task.completed && task.completed}
                    priority={task.task_priority}
                    taskCategory={task.todo_categories}
                    class={props.class}
                    onCompiled={props.onCompiled}
                    onFavorite={props.onFavorite}
                    onDelete={props.onDelete}
                    onAddNewTask={addTaskHandler}
                    cats={props.cats}
                />
            ))}
            <div className="add-task">
                <AddTask onAddTask={addTaskHandler}/>
            </div>
        </ul>
    );
}

export default TaskList;