import './TaskDate.css'

function TaskDate(props) {
    const month = props.date.toLocaleString('ja-JP-u-ca-japanese', {month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('ja-JP-u-ca-japanese', {day: '2-digit'});

    return (
        <div className='cost-date'>
                <div className='cost-date__month cost-dates'>{month}</div>
                <div className='cost-date__year cost-dates'>{year}</div>
                <div className='cost-date__day cost-dates'>{day}</div>
        </div>
    );
}
export default TaskDate;