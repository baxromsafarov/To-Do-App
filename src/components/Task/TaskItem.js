import Card from "../UI/Card";
import Skip from "./Skip";
import Star from "./Star";
import TaskDate from "./TaskDate";
import "./TaskItem.css"

function TaskItem(props){



    // propsi mojno bilo ispolzovat pryamo v divax
    const costDate = props.date;
    const costDescription = props.description;
    const costAmount = props.amount;

    
    return (
        <div className="card-box">
            <Card className={props.class}>
                <div className="btn-input">
                    <label className="container-input">
                        <input type="checkbox" />
                        <div className="checkmark"></div>
                    </label>
                    <Star id={costDescription}/>
                    <Skip id={costDescription}/>
                </div>
                <div className="desc-data">
                    <div className="titles">
                        <h2>{costDescription}</h2>
                        {/* <TaskDate date={costDate}/> */}
                    </div>
                    <div className="cost-item__price">{costAmount}</div>
                </div>
                
                
            </Card>
            
        </div>
    );
}

export default TaskItem;