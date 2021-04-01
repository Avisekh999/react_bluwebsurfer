import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import './Registration.css'
import Img from '../../assets/img/352dc8ecf3c4ffc76a8512121282f5cc.jpg'

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packagetaken, setPackage] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmpassword, setConfirmPassword] = useState('');

    const [passwordShown, setPasswordShown] = useState(false);

    // toggle password
    const togglePasswordVisiblity = () =>{
        setPasswordShown(passwordShown ? false : true);
    }

    // FORM SUBMISSION
    const handleSubmit = e => {
       
        e.preventDefault();
        console.log(name, email, packagetaken, mobile,password);
        
        var user = {
          name: name,
          email :email,
          packagetaken :packagetaken,
          mobile : mobile,
          password:password
        }
        // 192.168.0.122
        axios.post("http://localhost:1337/register", user)
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
        <div className="registration">
        <div className="registration-img registration-container">
    <header>
        <div className="registration-front-text">
            <h1>Register</h1>
        </div>
    </header>
    
</div>
<div className="registration-form-card">
                        <div className="registration-form-form">
                            <form onSubmit={handleSubmit}>
                                <div className="registration-form-name">
                                    <label>Name</label><input type="text" name="name" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="registration-form-mail">
                                    <label>Email</label> <input type="email" name="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="registration-form-password">
                                    <label>Password</label>
                                    <div>
                                        <input type={passwordShown ? "text" : "password"} name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}  /> 
                                        <i class="fa fa-eye" id="togglePassword" onClick={togglePasswordVisiblity}></i> 
                                    </div>
                                </div>
                                <div className="registration-form-package">
                                    <label>Package</label>
                                    {/* <div style={{height:'10px',width:'100%',overflow:'none'}} > */}
                                    <select  name="packagetaken"  value={packagetaken} onChange={e => setPackage(e.target.value)}>
                                        {/* <option value="Basic Package">Basic Package</option>
                                        <option value="Deluxe Package">Deluxe Package</option> */}
                                        <option value="Dynamic Basic Package">Dynamic Basic Package</option>
                                        <option value="Dynamic Deluxe Package">Dynamic Deluxe Package</option>
                                        <option value="Dynamic Premium Package">Dynamic Premium Package</option>
                                        <option value="Business Silver Package">Business Silver Package</option>
                                        <option value="Business Gold Package">Business Gold Package</option>
                                        <option value="Ecommerce Gold Package">Ecommerce Gold Package</option>
                                        <option value="Ecommerce Platinum Package">Ecommerce Platinum Package</option>
                                    </select>
                                    {/* </div>  */}
                                   
                                </div>  
                                <div className="registration-form-mobile">
                                    <label>Mobile No.</label> 
                                    <input type="number" name="mobile" placeholder="Your mobile..." value={mobile} onChange={e => setMobile(e.target.value)}>
                                    </input>
                                </div>
                                <div className="registration-form-button">
                                    <button type="submit">Register</button>
                                </div>
                                <div className="registration-form-login">
                                    <span>Already a customer? <Link to="/login" >Login</Link> here.</span>
                                </div>
                            </form>
                        </div>
                        <div className="registration-form-img">
                            <img src={Img} />
                        </div>
                </div>
</div>
    


        
    )
}

export default Registration
