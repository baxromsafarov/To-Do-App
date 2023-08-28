import './LoginForm.css';
import {  NavLink } from 'react-router-dom';

function LoginForm() {
    console.log('asdasdada')
    return (
        <div >
           
             <div className="section">  

                <div className="signin"> 

                    <div className="form-content"> 

                        <h2>Sign In</h2> 

                        <div className="form"> 

                            <div className="inputBox"> 

                                <input className='input1' type="text" required/> <i>Username</i> 

                            </div> 

                            <div className="inputBox"> 

                                <input className='input1' type="password" required/> <i>Password</i> 

                            </div> 

                            <div className="links"> <NavLink className='forgot' to="#">Forgot Password</NavLink> <NavLink to="/register">Signup</NavLink> 

                            </div> 

                            <div className="inputBox"> 

                                <input className='input1' type="submit" value="Login"/> 

                            </div> 
                        </div> 
                    </div> 
                </div> 

            </div> 
        </div>
    )

}

export default LoginForm;