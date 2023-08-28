import './AddTask.css';
import { useState } from 'react';

function AddTask (props){
    const [inputdate, setInputDate] = useState('');
    const [inputname, setInputName] = useState('');
    const [inputamount, setInputAmount] = useState('');

const nameChangeHandler = (event) =>{
    setInputName(event.target.value);
};

const amountChangeHandler = (event) =>{
    setInputAmount(event.target.value);
};

const dateChangeHandler = (event) =>{
    setInputDate(event.target.value);
};
const submitHandler = (event) => {
        
    event.preventDefault();

    const costData = {
        description : inputname,
        amount: inputamount,
        date: new Date(inputdate)
    };

    saveCostDataHandler(costData);

    setInputName('');
    setInputAmount('');
    setInputDate('');
};

    const showAddHandler = () =>{
        const visibility = document.querySelector('.add-data');
        const formHeight = document.querySelector('.add-task');
        visibility.classList.add("show-data");
        formHeight.style.height = "auto"
    }

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
        
       props.onAddTask(costData);

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
                        <input name="taks" className="input-task" type="text" placeholder="Add a Task" value={inputname} onChange={nameChangeHandler}/>
                    </label>
                </div>
                <div className="add-data">
                    <div className="add-form" onClick={showAddHandler}>
                        <label htmlFor="description">
                            <input name="description" className="input-task" type="text" placeholder="Description" value={inputamount} onChange={amountChangeHandler}/>
                        </label>
                    </div>
                    <div className="new-cost__control">
                        <label htmlFor="date">日付</label>
                        <input id='date' type="date" value={inputdate}  onChange={dateChangeHandler} min='2019-01-01' step = '2023-12-31'/>
                        <br/><br/>
                        <label htmlFor="time">時間</label>
                        <input type="time" name="" id="time" />
                    </div>
                    
                    <div className="radio-inputs">
                            <label className="radio">
                                <input type="radio" name="radio" />
                                <span className="name ordinary">Ordinary</span>
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio" />
                                <span className="name high">High</span>
                            </label>
                            <label className="radio">
                                <input type="radio" name="radio"/>
                                <span className="name very-high">Very High</span>
                            </label>
                    </div>
                    
                    <div className="category">
                        <h2>Category</h2>
                        <div className="category-input">
                            <input value="value-1" name="value-radio" id="value-1" type="radio"/>
                            <label htmlFor="value-1">Sport</label>
                            <input value="value-2" name="value-radio" id="value-2" type="radio"/>
                            <label htmlFor="value-2">Job</label>
                            <input value="value-3" name="value-radio" id="value-3" type="radio"/>
                            <label htmlFor="value-3">Holiday</label>
                        </div>
                    </div>
                    <div className=".new-cost__actions">
                        <button className='btn-form' type="submit">新しいタスクの追加</button>
                    </div>
                </div>
                </form>
        </div>
    )
}

export default AddTask;