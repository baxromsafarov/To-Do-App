import { NavLink } from 'react-router-dom';
import Task from '../Task/Task';
import './Main.css';
import React, { useState } from 'react';



const Main = (props) => {
    const [classes, setClasses] = useState('cost-item');
    const toCardHandler =  () =>{
        setClasses('to-card');
    } 
    const classList = classes;
    const addCostHandler = (cost) => {
        props.onAddCost(cost);
    };
    return (
        <>
        
        <div className="content">
            <div className="container-card">
                <div className="toggle" onClick={toCardHandler}>
                    {/* <NavLink to="/main-card"> */}
                        <span className="material-symbols-outlined cards">
                            dashboard_customize
                        </span>
                    {/* </NavLink> */}
                </div>
                <div className="card-list">
                    <Task class={classList} onAddCost={addCostHandler} costs={props.costs}></Task>
                </div>
            </div>
        </div>
        
        </>
        
    );

}

export default Main;