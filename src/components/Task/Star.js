import './Star.css';

function Star (props){
    return(
        <div>
        <input className='star-input' type="checkbox" id={props.id}/>
        <label htmlFor={props.id}>
            <svg viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
        </label>
        </div>
    )
}
export default Star;