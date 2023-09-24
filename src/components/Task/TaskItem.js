import Card from "../UI/Card";
import Skip from "./Skip";
import Star from "./Star";
import "./TaskItem.css"
import {NavLink} from "react-router-dom";


function TaskItem(props) {
    const taskId = props.id
    const taskName = props.name
    const taskDescription = props.description
    const taskDate = props.date
    const taskCompleted = props.completed == 1 ? true : false
    const taskFavorite = props.favorite == 1 ? true : false
    const taskPriority = props.priority
    const taskCategory = props.taskCategory
    console.log(props)

    const handlerCompleteClick = (e) => {
        const isComplete = e.target.checked;
        props.onCompiled(taskId, isComplete);
    }

    const handlerFavoriteClick = (e) => {
        const isFavorite = e.target.checked;
        props.onFavorite(taskId, isFavorite)
    };

    /* eslint-disable no-restricted-globals */
    const handlerDeleteClick = (e) => {
        if (confirm('このタスクを削除しますか？')) {
            props.onDelete(taskId, e.target)
        } else {
            e.target.checked = false
        }
    };

    const taskDateObj = new Date(taskDate).setHours(0, 0, 0, 0);
    const currentDate = new Date().setHours(0, 0, 0, 0);
    const taskDateStatus = taskDateObj < currentDate ? "shimekiri" : "";

    return (
        <div className="card-box">
            <Card className={props.class + ' prority_' + taskPriority}>
                <div className="left-icons">
                    <div className="btn-input">
                        <label className="container-input">
                            <input type="checkbox" checked={taskCompleted}
                                   onChange={handlerCompleteClick}/>
                            <div className="checkmark"></div>
                        </label>
                        <Star id={taskId} favorite={taskFavorite} handler={handlerFavoriteClick}/>
                    </div>
                    <div className="desc-data">
                        <div className="titles">
                            <h2>{taskName}</h2>
                        </div>
                        <div className="cost-item__price">{taskDescription}</div>
                    </div>
                    <div className={`cost-item__price ${taskDateStatus}`}>{taskDate}</div>
                </div>


                <div className="right-icons btn-input">
                    <div className="cats">
                        {props.cats.map((cat) => (
                            taskCategory?.some((taskCat) => taskCat.category_id == cat.id) ? (
                                <NavLink key={cat.id} to={`/category/${cat.id}`}>
                                    <span>{cat.title}</span>
                                </NavLink>
                            ) : null
                        ))}
                    </div>


                    <div className="edit">
                        <NavLink to={{
                            pathname: `${taskId}`,
                        }}>
                            <span className="material-symbols-outlined edit-icon">
                                edit
                            </span>
                        </NavLink>
                    </div>
                    <div className="skip">
                        <Skip id={taskId} handler={handlerDeleteClick}/>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default TaskItem;