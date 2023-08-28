import React, { useState } from "react";
import Calendar from 'react-calendar';
import Modal from 'react-modal';

import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function Calendars() {
  const [date, setDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState({});

  const handleDateChange = (date) => {
    setDate(date);
    setModalIsOpen(true);
  };

  const handleAddTask = () => {
    setTasks({ ...tasks, [date]: task });
    setTask("");
    setModalIsOpen(false);
  };

  return (
    <div className="calendars">
        <div className="c-container">
            <div className="App">
            <Calendar onClickDay={handleDateChange} />
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <h2>Add Task</h2>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button onClick={handleAddTask}>Add</button>
            </Modal>
            {tasks[date] && <div className="task">{tasks[date]}</div>}
            </div>
        </div>
    </div>
  );
}

export default Calendars;