import React, { useState } from "react";
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function Calendars(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [tasks, setTasks] = useState(props.allTasks);



    const handleSelect = (date) => {
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        let filtered = props.allTasks.filter((task)=>{
            let taskDate = new Date(task.date);
            return (
                taskDate >= date.selection.startDate &&
                taskDate <= date.selection.endDate
            );
        })

        setTasks(filtered);
    }

    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }


    return (

        <div className="calendars">
            <div className="c-container">
                <div className="App">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                    />

                </div>
                <div className="fil-tasks">
                    {tasks.map((task)=>{
                        let date = new Date(task.date);
                        return (
                            <div key={task.id}>
                                <h2>{task.description}</h2>
                                <h2>{date.toLocaleDateString()}</h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calendars;