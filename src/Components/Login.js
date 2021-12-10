import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleonSubmit = async (e) => {
  
        e.preventDefault();
   
        try {
            // Fetching is To do in this is Context API
            
            const response = await fetch("http://localhost:5000/api/auth/loginUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({email: credentials.email, password: credentials.password})
    
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                localStorage.setItem('token', json.authtoken);
                props.showalert("Logged in Successfully", "success")
                // redirect
                navigate('/')
            }
            else{
                props.showalert("Invalid Credentials ", "danger")
            }


        } catch (error) {
            console.log(error);
            console.log("27 line error")
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div >
            <h1>Login to Continue To iNoteBook</h1>
            <form onSubmit={handleonSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Enter Your Email address</label>
                    <input type="email" className="form-control" value={credentials.email} name="email" id="email" onChange={onchange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Enter Your Password</label>
                    <input type="password" className="form-control" value={credentials.password} name="password" id="password" onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
