import React from 'react'
import './Token.css'

import { useState } from 'react'
import axios from 'axios'
import 'dotenv'
import { useHistory } from "react-router-dom";
import Img from '../../assets/img/payment.png'


   // RAZORPAY METHODS
   function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

// to use if the app is in localhost or production
const __DEV__ = document.domain === 'localhost'

function Token() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packagetaken, setPackage] = useState('');
    const [mobile, setMobile] = useState('');

    // Real action start here

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)
        // axios.post('http://localhost:1337/razorpay', email)
        // .then(res=>{
        //     console.log(res);
        // })

		console.log(data)

        const options = {
			key: __DEV__ ? process.env.KEY_ID : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			// image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
                alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			// prefill: {
			// 	name,
			// 	email: 'sdfdsjfh2@ndsfdf.com',
			// 	phone_number: '9899999999'
			// }
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
        // console.log(payment_id);
	}

    // FORM SUBMISSION
    const handleSubmit = e => {
       
        e.preventDefault();
        
        console.log(name, email, packagetaken, mobile);
        
        var user = {
          name: name,
          email :email,
          packagetaken :packagetaken,
          mobile : mobile
        }
        // 192.168.0.122
        axios.post("http://localhost:1337/token", user)
            .then(res => {
                console.log(res.data.message+"response");
                if(res.data.message === "ok"){
                    displayRazorpay();
                    // let moneypaid = "true";

                    // if(moneypaid == "true"){
                    //     history.push("/");
                    // }
                    // else{
                    //     history.push("/token")
                    // }
                }
          })
            .catch(error => {
            console.log(error);
          });       
          
        //   history.push("/");

        //   displayRazorpay();
      }

    return (
        <div className="token">
            <div className="token-img token-container">
        <header>
            <div className="token-front-text">
                <h1>Token Money</h1>
            </div>
        </header>
        
    </div>
    <div className="token-form-card">
                            <div className="token-form-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="token-form-name">
                                        <label>Name</label><input required type="text" name="name" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="token-form-mail">
                                        <label>Email</label> <input required type="email" name="email" placeholder="Your email" value={email} onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="token-form-package">
                                        <label>Package</label> 
                                        <select required name="packagetaken" value={packagetaken} onChange={e => setPackage(e.target.value)}>
                                        <option value="Dynamic Basic Package">Dynamic Basic Package</option>
                                        <option value="Dynamic Deluxe Package">Dynamic Deluxe Package</option>
                                        <option value="Dynamic Premium Package">Dynamic Premium Package</option>
                                        <option value="Business Silver Package">Business Silver Package</option>
                                        <option value="Business Gold Package">Business Gold Package</option>
                                        <option value="Ecommerce Gold Package">Ecommerce Gold Package</option>
                                        <option value="Ecommerce Platinum Package">Ecommerce Platinum Package</option>
                                        </select>
                                    </div>  
                                    <div className="token-form-mobile">
                                        <label>Mobile No.</label> 
                                        <input required type="number" name="mobile" placeholder="Your mobile..." value={mobile} onChange={e => setMobile(e.target.value)}>
                                        </input>
                                    </div>
                                    <div className="token-form-button">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div className="token-form-img">
                                <img src={Img} />
                            </div>
                    </div>
   </div>
        
    )
}

export default Token
