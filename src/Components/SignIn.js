import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

function SignIn() {

    const[signin, setSignin]=useState({
        email:'',
        password:''
    })

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setSignin({...signin, [name]:value})
    }

    return (
        <div class="forms">
            {console.log(signin)}
            <form className="formfields">
                <div className="formfield">
                    <label className="fullName" htmlFor="email">E-mail Address</label>
                    <input type="text" 
                    id="email" 
                    className="formfield_Input"
                     placeholder="Enter yor email"
                      name="email"
                      onChange={(e)=>handleChange(e)}
                      value={signin.email} />   
                </div>

                <div className="formfield">
                    <label className="fullName" htmlFor="password">Password</label>
                    <input type="password" 
                    id="password" 
                    className="formfield_Input" 
                    placeholder="Enter yor password" 
                    name="password" 
                    onChange={(e)=>handleChange(e)}
                    value={signin.password}
                    />   
                </div>

                <div className="formfield">
                   <button class="formfield_button">Sign In</button>
                   <Link to="/" className="formfield_Link">Create an account</Link>
              </div>

            </form>
            
        </div>
    )
}
export default SignIn;
