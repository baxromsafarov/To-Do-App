import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import './TaskId.css';
import {ta} from "react-date-range/dist/locale";


function TaskId(props) {
    let {id} = useParams();
    const task = props.tasks.find((task) => task.id === Number(id));

    const [taskData, setTaskData] = useState(props.tasks);
    const [inputName, setInputName] = useState(task?.task_name);
    const [inputDescription, setInputDescription] = useState(task?.task_description);
    const [inputDate, setInputDate] = useState(props.formatDate(new Date(task?.task_deadline)));
    const [priority, setPriority] = useState(task?.task_priority);
    const [selectedCategories, setSelectedCategories] = useState(task?.todo_categories.map((category) => category.category_id)
    );


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const descriptionChangeHandler = (event) => {
        setInputDescription(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(props.formatDate(new Date(event.target.value)));
    };

    const priorityChangeHandler = (event) => {
        setPriority(event.target.value);
    };

    const categoryChangeHandler = (event) => {
        const categoryId = parseInt(event.target.value);
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedCategories([...selectedCategories, categoryId]);
        } else {
            setSelectedCategories(
                selectedCategories.filter((category) => category != categoryId)
            );
        }
    };


    const submitHandler = (event) => {
        event.preventDefault();
        event.preventDefault();

        const taskData = {
            name: inputName,
            description: inputDescription ?? '',
            deadline: props.formatDate(inputDate ? new Date(inputDate) : new Date()),
            priority: priority,
            category: selectedCategories
        };

        props.onUpdateTask(id, taskData, task)
    };

    return (
        <div className="container-form">

            <div className="form">
                <form action="" onSubmit={submitHandler}>
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
                                                   onChange={categoryChangeHandler}
                                                   checked={selectedCategories.includes(cat.id)}/>
                                            <label htmlFor={'value_' + cat.id}>{cat.title}</label>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=".new-cost__actions">
                            <button className='btn-form' type="submit">タスクを編集</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default TaskId;