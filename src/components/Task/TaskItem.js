import Card from "../UI/Card";
import TaskDate from "./TaskDate";
import "./TaskItem.css"

function TaskItem(props){



    // propsi mojno bilo ispolzovat pryamo v divax
    const costDate = props.date;
    const costDescription = props.description;
    const costAmount = props.amount;

    
    return (
        <div>
            <Card className="cost-item">
                <label className="container-input">
                    <input type="checkbox" />
                    <div className="checkmark"></div>
                </label>
                
                
                <div className="desc-data">
                    <div className="titles">
                        <h2>{costDescription}</h2>
                        <TaskDate date={costDate}/>
                    </div>
                </div>
                <div className="cost-item__price">{costAmount}</div>
                
            </Card>
            
        </div>
    );
}

export default TaskItem;