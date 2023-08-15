import "./TaskList.css";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
const TaskList = (props) => {
    
    if (props.costs.length === 0){
        return <h2 className="cost-list__fallback">В этом году Расходов Нет</h2>
    }


    return (
            <ul className="cost-list">
            {props.costs.map((cost) =>(
            <TaskItem 
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
            /> 
        ))}
            <Card className="add-task">
                <div className="new-task">
                    <label htmlFor="taks">
                        <span className="material-symbols-outlined icons">
                            add_circle
                        </span>
                        <input name="taks" className="input-task" type="text" placeholder="Add a Task" />
                    </label>
                </div>
            </Card>
            </ul>
        );
}

export default TaskList;