import { Link, useNavigate } from "react-router-dom"
import "./Login.css"

export default function Login(){

    //updating the userName field and password field with every key stroke
    // const [userName, setuserName] = React.useState("")
    // const [passWord, setPassword] = React.useState("")
    
    //this is the setter function for both of them
    // function handleChangeUser(event){
    //     setuserName(event.target.value)
    // }
    // function handleChangePassword(event){
    //     setPassword(event.target.value)
    // }
    
    //loginValues object has two attributes username and password. Initially they are empty strings
    // const[ loginValues, setloginValues ] = React.useState(
    //     {
    //         username : "",
    //         password : ""
    //     }
    // )

    const navigate = useNavigate();
    
    //once LOGIN is clicked
    function handleClick(){
    
            //it updates the attributes of username to the latest value of userName from the username input. same with the password section
            // setloginValues(
            //     {
            //         username: userName,
            //         password: passWord,
            //     }
            //  )
            //once it's done, it'll navigate to the POST page
            navigate("/Post")   
    }

    return(
        <div>
                <form action="" className="login--form" >

                    <h2>Login</h2>
                    
                    <label htmlFor="Chaptername">Username</label>
                    <input type="text" id= "Chaptername"  />
                    {/* to be added ~ name = "username" value = {loginValues.username} onChange={handleChangeUser} */}
                    
                    <label htmlFor="Password">Password</label>
                    <input type="password" id= "Password"  />

                    {/* to be added ~ name = "password" value = {loginValues.password} onChange={handleChangePassword} */}
                    <button onClick={handleClick}  >LOGIN</button>

                </form>






            <Link to = "/Login/Register" >Didn't signup yet ? Register now ! </Link> 
        </div>
    )
}