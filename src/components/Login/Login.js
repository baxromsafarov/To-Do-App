import './Login.css';
import LoginForm from './LoginForm';

function Login({axios}) {

    return (

        <div className='loginForm'>
            <LoginForm axios={axios}/>
        </div>

    )
}

export default Login;