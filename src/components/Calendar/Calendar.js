import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import Card from "../UI/Card";
import Skip from "../Task/Skip";
import Star from "../Task/Star";
import {DateRangePicker} from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function Calendars(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(props.allTasks)
        filterTasks(startDate, endDate);
    }, [props.allTasks]);


    const filterTasks = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        const filtered = props.allTasks.filter((task) => {
            const taskDate = new Date(task.task_deadline);
            taskDate.setHours(0, 0, 0, 0);
            const inclusiveEndDate = new Date(endDate);
            inclusiveEndDate.setDate(inclusiveEndDate.getDate() + 1);

            return taskDate >= startDate && taskDate < inclusiveEndDate
        });

        setTasks(filtered);
    };

    const handleSelect = (date) => {
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        filterTasks(date.selection.startDate, date.selection.endDate);
    };


    const selectionRange = {
        startDate,
        endDate,
        key: "selection",
    };

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
                    {tasks.filter(task => !(task.completed == 1 ? true : false)).map((task) => {
                        const handlerCompleteClick = (e) => {
                            const isComplete = e.target.checked;
                            props.onCompiled(task.id, isComplete);
                        }

                        const handlerFavoriteClick = (e) => {
                            const isFavorite = e.target.checked;
                            props.onFavorite(task.id, isFavorite)
                        };

                        /* eslint-disable no-restricted-globals */
                        const handlerDeleteClick = (e) => {
                            if (confirm('このタスクを削除しますか？')) {
                                props.onDelete(task.id, e.target)
                            } else {
                                e.target.checked = false
                            }
                        };

                        const taskDateObj = new Date(task.task_deadline).setHours(0, 0, 0, 0);
                        const currentDate = new Date().setHours(0, 0, 0, 0);
                        const taskDateStatus = taskDateObj < currentDate ? "shimekiri" : "";

                        return (
                            <Card className={props.class + ' prority_' + task.task_priority}>
                                <div className="left-icons">
                                    <div className="btn-input">
                                        <label className="container-input">
                                            <input type="checkbox" name={task.id}
                                                   checked={task.completed== 1 ? true : false} onChange={handlerCompleteClick}/>
                                            <div className="checkmark"></div>
                                        </label>
                                        <Star id={task.id} favorite={task.favorite== 1 ? true : false} handler={handlerFavoriteClick}/>
                                    </div>
                                    <div className="desc-data">
                                        <div className="titles">
                                            <h2>{task.task_name}</h2>
                                        </div>
                                        <div className="cost-item__price">{task.task_description}</div>
                                    </div>
                                    <div className={`cost-item__price ${taskDateStatus}`}>{task.task_deadline}</div>
                                </div>
                                <div className="right-icons btn-input">
                                    <div className="cats">
                                        {props.cats.map((cat) => (
                                            task.todo_categories?.some((taskCat) => taskCat.category_id == cat.id) ? (
                                                <NavLink key={cat.id} to={`/category/${cat.id}`}>
                                                    <span>{cat.title}</span>
                                                </NavLink>
                                            ) : null
                                        ))}
                                    </div>
                                    <div className="edit">
                                        <NavLink to={{
                                            pathname: `${task.id}`,
                                        }}>
                                        <span className="material-symbols-outlined edit-icon">
                                            edit
                                        </span>
                                        </NavLink>
                                    </div>
                                    <div className="skip">
                                        <Skip id={task.id} handler={handlerDeleteClick}/>
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calendars;