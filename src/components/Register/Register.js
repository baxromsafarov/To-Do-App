import { NavLink } from 'react-router-dom';
import './Register.css';
import axios, {isCancel, AxiosError} from 'axios';
import { useState } from 'react';

function Register(props){
    const [inputemail, setInputEmail] = useState('');
    const [inputname, setInputName] = useState('');
    const [inputpassword, setInputPassword] = useState('');

    const emailChangeHandler = (event) =>{
        setInputEmail(event.target.value);
    };
    
    const nameChangeHandler = (event) =>{
        setInputName(event.target.value);
    };
    
    const passChangeHandler = (event) =>{
        setInputPassword(event.target.value);
    };

    const onSubmitHandler = (event) =>{


        event.preventDefault();

        const registerData = {
            email : inputemail,
            name: inputname,
            password: inputpassword,
            password_confirmation: inputpassword
        };

        

    }

    return(
        <div className='register-form'>
           
             <div className="section">  

                <div className="signin form-res"> 

                    <div className="form-content"> 

                        <h2>Sign Up</h2> 

                        <div className="form "> 
                        <form action="" onSubmit={onSubmitHandler}>

                            <div className="inputBox"> 

                                <input className='input1' type="text" onChange={emailChangeHandler} required/> <i>Email</i> 

                            </div>

                            <div className="inputBox"> 

                                <input className='input1' type="text" onChange={nameChangeHandler} required/> <i>Username</i> 

                            </div> 

                            <div className="inputBox"> 

                                <input className='input1' type="password" onChange={passChangeHandler} required/> <i>Password</i> 

                            </div> 

                            <div className="links"> Already have account? <NavLink to="/login">Sign in</NavLink> 

                            </div> 

                            <div className="inputBox"> 

                                <input className='input1' type="submit" value="Register"/> 

                            </div> 
                            </form>
                        </div> 
                    </div> 
                </div> 

            </div> 
        </div>
    )
}

export default Register;