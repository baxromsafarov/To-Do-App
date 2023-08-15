import './Card.css';

function Card(props){

    const classes = 'card ' + props.className;
    // {props.children} pozvolyaet sozdovat' komponenti obolochki 
    return (
        <div className={classes}>
            {props.children}
        </div>
    );

}

export default Card;