import {Link, useLocation} from 'react-router-dom';
import {useState} from 'react';
import './TaskForm.css';

function TasksForm(props) {
    const [inputname, setInputName] = useState('');
    const [inputamount, setInputAmount] = useState('');
    const [inputdate, setInputDate] = useState(props.formatDate(new Date()));
    const [priority, setPriority] = useState('2');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const uncheckMultipleSelect = () => {
        const checkboxes = document.querySelectorAll('.multiple_select');

        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };


    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const priorityChangeHandler = (event) => {
        setPriority(event.target.value);
    };

    const categoryChangeHandler = (event) => {
        const categoryName = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories([...selectedCategories, categoryName]);
        } else {
            setSelectedCategories(
                selectedCategories.filter((category) => category !== categoryName)
            );
        }
    };



    const submitHandler = (event) => {

        event.preventDefault();

        const taskData = {
            name: inputname,
            description: inputamount,
            deadline: props.formatDate(inputdate ? new Date(inputdate) : new Date()),
            priority: priority,
            category: selectedCategories
        };

        saveTaskDataHandler(taskData);

        setInputName('');
        setInputAmount('');
        setInputDate(props.formatDate(new Date()));
        setPriority('2');
        setSelectedCategories([]);
        uncheckMultipleSelect()
    };

    const saveTaskDataHandler = (inputTaskData) => {
        props.onAddTask(inputTaskData);
    };


    return (
        <div className="container-form">
            <div className="form">
                <form action="" onSubmit={submitHandler}>
                    <div className="new-cost__controls">
                        <div className="new-cost__control">
                            <label htmlFor="">タイトル</label>
                            <input type="text" required value={inputname} onChange={nameChangeHandler}/>
                        </div>
                        <div className="new-cost__control">
                            <label htmlFor="">メモを追加</label>
                            <input type="text" value={inputamount} onChange={amountChangeHandler}/>
                        </div>
                        <div className="new-cost__control">
                            <label htmlFor="">締切</label>
                            <input type="date" value={inputdate} onChange={dateChangeHandler}/>
                        </div>
                        <div className="add-data">
                            <h2>タスクの優先度</h2>
                            <div className="radio-inputs">
                                <label className="radio">
                                    <input type="radio"
                                           name="priority"
                                           value="1"
                                           checked={priority == '1'}
                                           onChange={priorityChangeHandler}
                                    />
                                    <span className="name ordinary">低い</span>
                                </label>
                                <label className="radio">
                                    <input type="radio"
                                           name="priority"
                                           value="2"
                                           checked={priority == '2'}
                                           onChange={priorityChangeHandler}
                                    />
                                    <span className="name high">普通</span>
                                </label>
                                <label className="radio">
                                    <input type="radio"
                                           name="priority"
                                           value="3"
                                           checked={priority == '3'}
                                           onChange={priorityChangeHandler}
                                    />
                                    <span className="name very-high">最高</span>
                                </label>
                            </div>

                            <div className="category">
                                <h2>カテゴリー</h2>
                                <div className="category-input cat-input">
                                    {props.cats.map((cat) => (
                                        <>
                                            <input value={cat.id}
                                                   name="category"
                                                   id={'value_' + cat.id}
                                                   type="checkbox"
                                                   className={'multiple_select'}
                                                   onChange={categoryChangeHandler}/>
                                            <label htmlFor={'value_' + cat.id}>{cat.title}</label>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className=".new-cost__actions">
                            <button className='btn-form' type="submit">新しいタスクの追加</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TasksForm;