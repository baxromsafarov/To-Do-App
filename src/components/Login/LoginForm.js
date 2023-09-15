import './LoginForm.css';
import { NavLink} from 'react-router-dom';
import {useState} from 'react';

function LoginForm({axios}) {
    const [inputemail, setInputEmail] = useState('');
    const [inputpassword, setInputPassword] = useState('');

    const emailChangeHandler = (event) => {
        setInputEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setInputPassword(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const registerData = {
            email: inputemail,
            password: inputpassword,
            password_confirmation: inputpassword
        };

        axios.post('/login', registerData)
            .then(response => {
                const {token} = response.data
                localStorage.setItem('userToken', token)

                window.location.href = '/';
                // window.location.reload();
            }).catch(error => {
            console.error('Error in login', error)
        })

    }

    return (
        <div>

            <div className="section">

                <div className="signin">

                    <div className="form-content">

                        <h2>Sign In</h2>

                        <div className="form">
                            <form action="" onSubmit={onSubmitHandler}>

                                <div className="inputBox">

                                    <input className='input1' type="text" onChange={emailChangeHandler} required/>
                                    <i>Email</i>

                                </div>

                                <div className="inputBox">

                                    <input className='input1' type="password" onChange={passChangeHandler} required/>
                                    <i>Password</i>

                                </div>

                                <div className="links"><NavLink className='forgot' to="#">Forgot Password</NavLink>
                                    <NavLink to="/register">Signup</NavLink>

                                </div>

                                <div className="inputBox">

                                    <input className='input1' type="submit" value="Login"/>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default LoginForm;