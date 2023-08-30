import './AddTask.css';
import {useState} from 'react';

function AddTask(props) {
    const [inputname, setInputName] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const taskData = {
            description: inputname,
        };

        saveTaskDataHandler(taskData);
        setInputName('');
    };

    const showAddHandler = () => {
        const visibility = document.querySelector('.add-data');
        const formHeight = document.querySelector('.add-task');
        visibility.classList.add("show-data");
        formHeight.style.height = "auto"
    }

    const saveTaskDataHandler = (inputTaskData) => {
        const taskData = {
            ...inputTaskData,
            id: Math.random(),
            date: new Date()
        }
        props.onAddTask(taskData);


        const visibility = document.querySelector('.add-data');
        const formHeight = document.querySelector('.add-task');
        visibility.classList.remove("show-data");
        formHeight.style.height = "70px"
    };

    return (
        <div className="new-task">
            <form className='add-task-form' onSubmit={submitHandler} action="">
                <div className="add-form" onClick={showAddHandler}>
                    <label htmlFor="taks">
                        <span className="material-symbols-outlined icons">
                            add_circle
                        </span>
                        <input name="taks" className="input-task" type="text" placeholder="Add a Task" value={inputname}
                               onChange={nameChangeHandler}/>
                    </label>
                </div>

                <div className="add-data">
                    <div className=".new-cost__actions">
                        <button className='btn-form' type="submit">新しいタスクの追加</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTask;