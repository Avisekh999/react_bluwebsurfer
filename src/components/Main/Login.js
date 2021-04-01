import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import Img from '../../assets/img/developmentcard.jpg'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [passwordShown, setPasswordShown] = useState(false);

    // toggle password
    const togglePasswordVisiblity = () =>{
        setPasswordShown(passwordShown ? false : true);
    }
    // FORM SUBMISSION
    const handleSubmit = e => {
       
        e.preventDefault();
        
        console.log(email,password);
        
        var user = {
          email :email,
          password:password
        }
        // 192.168.0.122
        axios.post("http://localhost:1337/login", user)
            .then(res => {
                console.log(res.data.message+"response");
                
          })
            .catch(error => {
            console.log(error);
          });       
          
        //   history.push("/");

        //   displayRazorpay();
      }


    return (
        <div className="login">
        <div className="login-img login-container">
    <header>
        <div className="login-front-text">
            <h1>Sign In</h1>
        </div>
    </header>
    
</div>
<div className="login-form-card">
                        <div className="login-form-form">
                            <form onSubmit={handleSubmit}>
                                <div className="login-form-mail">
                                    <label>Email</label> <input type="email" name="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="login-form-password">
                                    <label>Password</label>
                                    <div>
                                        <input type={passwordShown ? "text" : "password"} name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}  /> 
                                        <i class="fa fa-eye" id="togglePassword" onClick={togglePasswordVisiblity}></i> 
                                    </div>
                                </div>
                                <div className="login-form-button">
                                    <button type="submit">Log In</button>
                                </div>
                            </form>
                        </div>
                        <div className="login-form-img">
                            <img src={Img} />
                        </div>
                </div>
</div>
    )
}

export default Login
