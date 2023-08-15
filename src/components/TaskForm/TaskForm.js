import { Link, useLocation} from 'react-router-dom';
import { useState } from 'react';
import './TaskForm.css';

function TasksForm(props) {

    const [inputname, setInputName] = useState('');
    const [inputamount, setInputAmount] = useState('');
    const [inputdate, setInputDate] = useState('');

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

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }

       props.onAddCost(costData);
    };
    

    return (
        <div className="container-form">
            <div className="form">
                <form action=""  onSubmit={submitHandler}>
                            <div className="new-cost__controls">
                                <div className="new-cost__control">
                                    <label htmlFor="">タイトル</label>
                                    <input type="text" value={inputname} onChange={nameChangeHandler}/>
                                </div>
                                <div className="new-cost__control">
                                    <label htmlFor="">メモを追加</label>
                                    <input type="text" value={inputamount} onChange={amountChangeHandler} min='0.01' step = '0.01'/>
                                </div>
                                <div className="new-cost__control">
                                    <label htmlFor="">日付</label>
                                    <input type="date" value={inputdate}  onChange={dateChangeHandler} min='2019-01-01' step = '2023-12-31'/>
                                </div>
                                <div className=".new-cost__actions">
                                    <button className='btn-form' type="submit">新しいタスクの追加</button>
                                </div>
                            </div>
                </form>
            </div>
        {/* <h1 className='h1'>Tasks</h1>
        <ul className='h1'>
            <li><Link to={`${url.pathname}/reading`}>Reading</Link></li>
            <li><Link to={`${url.pathname}/traning`}>Traning</Link></li>
        
        </ul> */}
        </div>
    );
}

export default TasksForm;