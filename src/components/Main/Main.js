import { NavLink } from 'react-router-dom';
import Task from '../Task/Task';
import './Main.css';
import React, { useState } from 'react';



const Main = (props) => {
    

    return (
        <>
        
        <div className="content">
            <div className="container-card">
                <div className="toggle">
                    {/* <NavLink to="/main-card">
                        <span className="material-symbols-outlined cards">
                            dashboard_customize
                        </span>
                    </NavLink> */}
                </div>
                <div className="card-list">
                    <Task  costs={props.costs}></Task>
                </div>
            </div>
        </div>
        
        </>
        
    );

}

export default Main;