import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function SignUp() {

    const[signup, setSignup]=useState({
        name:'',
        password:'',
        email:''
      })

      const handleChange=(e)=>{
         const{name, value}=e.target;
         setSignup({...signup, [name]:value})
      }

    return (
        <div className="forms">
            {console.log(signup)}
            <form className="formfields">
                 <div className="formfield">
                     <label className="fullName" htmlFor="name">Full Name</label>
                     <input 
                        type="text" 
                        id="name" 
                        className="formfield_Input" 
                        placeholder="Enter your full name" 
                        name="name"
                        
                        onChange={(e)=>handleChange(e)}
                        value={signup.name}/>   
                 </div>
                 <div className="formfield">
                     <label className="fullName" htmlFor="password">Password</label>
                     <input 
                        type="password" 
                        id="password" 
                        className="formfield_Input" 
                        placeholder="Enter your password" 
                        name="password" 
                        
                        onChange={(e)=>handleChange(e)}
                        value={signup.password}/>   
                 </div>
                 <div className="formfield">
                     <label className="fullName" htmlFor="email">E-mail Address</label>
                     <input 
                        type="text" 
                        id="email" 
                        className="formfield_Input" 
                        placeholder="Enter your email" 
                        name="email" 
                        
                        onChange={(e)=>handleChange(e)}
                        value={signup.email}/>   
                 </div>
                 <div className="formfield">
                <label className="checkBox">I agree all statements</label>
                    <input className="formfield__CheckBox" type="checkbox" name="hasAgreed" />
              </div>
              <div className="formfield">
                   <button class="formfield_button">Sign Up</button>
                   <Link to="/sign-in" className="formfield_Link">I'm already member</Link>
              </div>

            </form>
        </div>
    )
}
export default SignUp;
