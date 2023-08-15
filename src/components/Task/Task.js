import './Task.css';
import { useState } from "react";
import Card from "../UI/Card";
import TaskList from "./TaskList"

function Task(props) {

    
    const [selectedYear, setSelectedYear] = useState('2023');
    
    // const yearChangeHandler = (year) => {     
    //     console.log(year);
    //     setSelectedYear(year);
    // };

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <div className="costs">
                {/* <CostFilter year={selectedYear} onChangeYear={yearChangeHandler}/> */}

                {/* <CostsDiagram costs={filteredCosts}/> */}

                <TaskList costs={filteredCosts}/>
                            
            </div>
        </div>
    );
}

export default Task;