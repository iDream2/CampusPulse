import { useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import "./Login.css"

export default function LoginForm(){

    const [loginValues, setloginValues] = useState(
        {
            username : "",
            password : ""
        }
    )

    function formChangeHandler(event){
        setloginValues( (prevState) => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    
    }
    
    const navigate = useNavigate()
    function handleClick(){

         navigate ("/Login/Post")
        // console.log(loginValues)
    }

    return(
        <div >
                    
                <div  className= "login--form"  >


                    
                    <h2>Login</h2>
                    
                    <label htmlFor="Chaptername">Username</label>
                    <input type="text" id= "Chaptername" placeholder="johndoe" name = "username" onChange={formChangeHandler}  value={loginValues.username}/>
                    {/* to be added ~ name = "username" value = {loginValues.username} onChange={handleChangeUser} */}
                    
                    <label htmlFor="Password">Password</label>
                    <input type="password" id= "Password" placeholder="abcd1234" name = "password" onChange={formChangeHandler} value={loginValues.password} />

                    {/* to be added ~ name = "password" value = {loginValues.password} onChange={handleChangePassword} */}
                    <button onClick={handleClick}>Login</button>

                </div>

                <br />
                <br />
                <br />

              <Link to = "/Login/Register" className="register-link" >Didn't signup yet ? Register now ! </Link>   
        </div>

    )
}
