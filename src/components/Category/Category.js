import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import '../Important/Important.css';
import Task from '../Task/Task';

function Category(props) {
    let {id} = useParams();
    const addTaskHandler = (task) => {
        props.onAddTask(task);
    };

    const filteredTasks = props.tasks.filter(task => {
        return task?.todo_categories.some(category => category.category_id == id);
    })

    return (
        <div className="important">
            <div className="content">
                <div className="container-card">
                    <div className="card-list">
                        <Task onCompiled={props.onCompiled}
                              onFavorite={props.onFavorite}
                              onDelete={props.onDelete} onAddTask={addTaskHandler} cats={props.cats} tasks={filteredTasks}></Task>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;