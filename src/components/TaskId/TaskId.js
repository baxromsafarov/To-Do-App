import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import './TaskId.css';
import {ta} from "react-date-range/dist/locale";


function TaskId(props) {
    let {id} = useParams();
    const task = props.tasks.find((task) => task.id === Number(id));
    console.log(task)
    const [taskData, setTaskData] = useState(props.tasks);
    const [inputName, setInputName] = useState(task.task_name);
    const [inputDescription, setInputDescription] = useState(task?.task_description);
    const [inputDate, setInputDate] = useState(props.formatDate(new Date(task.task_deadline)));

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setInputDescription(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(props.formatDate(new Date(event.target.value)));
    };


    const submitHandler = (event) => {
        event.preventDefault();
        event.preventDefault();

        const taskData = {
            name: inputName,
            description: inputDescription,
            deadline: props.formatDate(inputDate ? new Date(inputDate) : new Date())
        };


        props.onUpdateTask(id, taskData, task)
    };

    return (
        <div className="container-form">

            <div className="form">
                <form action="" onSubmit={submitHandler}>
                    <h2>Change Task</h2>
                    <div className="new-cost__controls">
                        <div className="new-cost__control">
                            <label htmlFor="">タイトル</label>
                            <input type="text" value={inputName} onChange={nameChangeHandler}/>
                        </div>
                        <div className="new-cost__control">
                            <label htmlFor="">メモを追加</label>
                            <input type="text" value={inputDescription} onChange={descriptionChangeHandler}/>
                        </div>
                        <div className="new-cost__control">
                            <label htmlFor="">日付: {inputDate}</label>
                            <input type="date" value={inputDate} onChange={dateChangeHandler}/>
                        </div>
                        {/*<div className="add-data">*/}

                        {/*<div className="new-cost__control">*/}
                        {/*    <label htmlFor="time">時間</label>*/}
                        {/*    <input type="time" name="" id="time"/>*/}
                        {/*</div>*/}

                        {/*<div className="radio-inputs">*/}
                        {/*    <label className="radio">*/}
                        {/*        <input type="radio" name="radio"/>*/}
                        {/*        <span className="name ordinary">Ordinary</span>*/}
                        {/*    </label>*/}
                        {/*    <label className="radio">*/}
                        {/*        <input type="radio" name="radio"/>*/}
                        {/*        <span className="name high">High</span>*/}
                        {/*    </label>*/}
                        {/*    <label className="radio">*/}
                        {/*        <input type="radio" name="radio"/>*/}
                        {/*        <span className="name very-high">Very High</span>*/}
                        {/*    </label>*/}
                        {/*</div>*/}

                        {/*<div className="category">*/}
                        {/*    <h2>Category</h2>*/}
                        {/*    <div className="category-input">*/}
                        {/*        <input value="value-1" name="value-radio" id="value-1" type="radio"/>*/}
                        {/*        <label htmlFor="value-1">Sport</label>*/}
                        {/*        <input value="value-2" name="value-radio" id="value-2" type="radio"/>*/}
                        {/*        <label htmlFor="value-2">Job</label>*/}
                        {/*        <input value="value-3" name="value-radio" id="value-3" type="radio"/>*/}
                        {/*        <label htmlFor="value-3">Holiday</label>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*</div>*/}
                        <div className=".new-cost__actions">
                            <button className='btn-form' type="submit">新しいタスクの追加</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default TaskId;