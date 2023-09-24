import {useState} from "react";
import {NavLink, useParams} from "react-router-dom";


function CategoryId(props) {
    let {cat_id} = useParams();
    const category = props.cats.find((category) => category.id === Number(cat_id));

    const [inputName, setInputName] = useState(category.title);
    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        event.preventDefault();

        const catData = {
            title: inputName,
        };
        props.onUpdateCategory(cat_id, catData)
    };
    return (
        <div className="container-form">
            <div className="form">
                <form action="" onSubmit={submitHandler}>
                    <h2>カテゴリーを変更</h2>
                    <div className="new-cost__controls">
                        <div className="new-cost__control">
                            <label htmlFor="">タイトル</label>
                            <input type="text" value={inputName} onChange={nameChangeHandler}/>
                        </div>


                        <div className=".new-cost__actions">
                            <button className='btn-form' type="submit">カテゴリーを編集</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default CategoryId;