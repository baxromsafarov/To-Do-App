import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./AddCategory.css";

const AddCategory = (props) => {
    const [inputName, setInputName] = useState("");

    const handleNameChange = (event) => {
        setInputName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCategory = {
            title: inputName,
        };

        props.onAddCat(newCategory);

        setInputName("");
    };

    return (
        <div className="cat">
            <ul className="cat-list">
                <div className="cat-title">
                    {props.cats.map((cat) => (
                        <div key={cat.id} className="cat-link">
                            <NavLink to={`/category/${cat.id}`}>
                                <div className="error">
                                    <div className="error__title">{cat.title}</div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className="add-task">
                    <div className="new-task">
                        <form className="add-task-form" onSubmit={handleSubmit}>
                            <div className="add-form">
                                <label htmlFor="category">
                  <span className="material-symbols-outlined icons">
                    add_circle
                  </span>
                                    <input
                                        name="category"
                                        className="input-category"
                                        type="text"
                                        placeholder="カテゴリーの追加"
                                        value={inputName}
                                        onChange={handleNameChange}
                                        required
                                    />
                                </label>
                            </div>
                            <div className="add-data">
                                <div className="new-cost__actions">
                                    <button className="btn-form" type="submit">
                                        新しいカテゴリーの追加
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default AddCategory;