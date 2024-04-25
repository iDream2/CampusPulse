import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"



export default function Register(){
    
    // const [registerForm, setregisterForm] = React.useState(
    //     {
    //         chaptername : "",
    //         username : "" ,
    //         passsword : " ",
    //         description : " ",
    //     }
    // )

    // //With every key-stroke, the values will need to be upadated. The event parameter will listen to the element that triggered the event
    // function registerData(event){
    //     setregisterForm( (prevState) => ({
    //         ...prevState,
    //         [event.target.name] : event.target.value
    //     }))
    
    // }


    const navigate = useNavigate()

    function handleClick(){
        //console.log(registerForm)
         navigate("/Register/Post")
    }
   
   
    return(
        <div>
            <h2>REGISTER YOUR CHAPTER!</h2>

            <form action="" className="register--form" >

                    

                        <label htmlFor="CHAPTERNAME"> CHAPTERNAME  </label>
                        <input type="text"  id= "CHAPTERNAME"    />
                    {/* to be added ~ name = "chaptername" value = {registerForm.chaptername} onChange={registerData} */}

                        <label htmlFor="USERNAME"> USERNAME </label>                        
                        <input type="text"  id="USERNAME"  />
                    {/*name = "username"  value = {registerForm.username} onChange={registerData} */  }
                        <label htmlFor="PASSWORD">PASSWORD</label>
                        <input type="password"  id= "PASSWORD"  />
                    {/* name = "password"  value = {registerForm.passsword}  onChange={registerData} */}
                        
                        
                        <label htmlFor= "DESCRIPTION">CHAPTER DESCRIPTION</label>
                        <textarea  id="DESCRIPTION" cols="30" rows="10"  ></textarea>

                        
                        
                {/* to be added ~  name="description"  value = {registerForm.description} onChange={registerData} */}

                        <br />
                        <br />
                        <br />
                        <button onClick={handleClick}>REGISTER</button>

                </form>


        </div>
    )
}