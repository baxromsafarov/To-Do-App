import Card from "../UI/Card";
import Skip from "./Skip";
import Star from "./Star";
import TaskDate from "./TaskDate";
import "./TaskItem.css"

function TaskItem(props) {
    const taskDate = props.date;
    const taskDescription = props.description;
    const taskAmount = props.amount;
    const taskId = props.id


    return (
        <div className="card-box">
            <Card className={props.class}>
                <div className="btn-input">
                    <label className="container-input">
                        <input type="checkbox"/>
                        <div className="checkmark"></div>
                    </label>
                    <Star id={taskId}/>
                    <Skip id={taskId}/>
                </div>
                <div className="desc-data">
                    <div className="titles">
                        <h2>{taskDescription}</h2>
                        {/* <TaskDate date={costDate}/> */}
                    </div>
                    <div className="cost-item__price">{taskAmount}</div>
                </div>
            </Card>

        </div>
    );
}

export default TaskItem;