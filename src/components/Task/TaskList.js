import "./TaskList.css";
import TaskItem from "./TaskItem";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import AddTask from '../AddTask/AddTask'

const TaskList = (props) => {
    
    if (props.costs.length === 0){
        return <h2 className="cost-list__fallback">В этом году Расходов Нет</h2>
    }
    const addCostHandler = (costData) => {

       props.onAddNewTask(costData);
    };

    return (
            <ul className="cost-list">
            {props.costs.map((cost) =>(
            <TaskItem 
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
            class={props.class}
            /> 
        ))}
            <div className="add-task">
                <AddTask onAddTask={addCostHandler}/>
            </div>
            </ul>
        );
}

export default TaskList;