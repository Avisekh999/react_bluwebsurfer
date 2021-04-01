import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function TokenMoney() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packagetaken, setPackage] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, packagetaken, mobile);
        
        var user = {
          name: name,
          email :email,
          packagetaken :packagetaken,
          mobile : mobile
        }

          axios
            .post("http://192.168.0.122:6969/donateus", user)
          .then(res => {
            console.log(res+"response");
          })
          .catch(error => {
            console.log(error);
          });
      }

    return (
        <form onSubmit={handleSubmit}>
            Name: <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/> <br/>
            Email: <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  /> <br/>
            Package :  <select value={packagetaken} onChange={e => setPackage(e.target.value)}>
                            <option value="Basic Package">Basic Package</option>
                            <option value="Deluxe Package">Deluxe Package</option>
                            <option value="Dynamic Package">Dynamic Package</option>
                        </select> <br />
            Mobie No: <input type="number" name="mobileno" value={mobile} onChange={e => setMobile(e.target.value)}/> <br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default TokenMoney
