import './Important.css';
import Task from '../Task/Task';
import { useState } from "react";

function Important(props){
    const addCostHandler = (cost) => {
        props.onAddCost(cost);
    };

    return (
        <div className="important">
            <div className="content">
            <div className="container-card">
                
                <div className="card-list">
                    <Task onAddCost={addCostHandler} costs={props.costs}></Task>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Important;