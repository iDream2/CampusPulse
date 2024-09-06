import { useEffect, useState } from "react";
import React from "react"
import {useNavigate, Link} from "react-router-dom"
import "./Navbar.css"
function Navbar (){
    const accessToken = localStorage.getItem('accessToken')
    console.log("access value :", accessToken)
    const [status, setStatus] = React.useState(null)

        // React.useEffect(() => {
        
        //  if (accessToken === null) {
        //       setStatus("Login");
        //   } else {
        //       setStatus("Post");
        //   }
    
        //   }, [accessToken]);

        useEffect(() => {
            setStatus(accessToken !== null);
        }, [accessToken]);


    const navi = useNavigate();
    
    function handleLogout(){
        //....
        localStorage.removeItem('accessToken');
        navi("/")
    }
    // async function handleLogout() {
    //     try {
    //         const response = await fetch('/logout', {
    //             method: 'POST', // or 'GET' depending on your server implementation
    //             credentials: 'same-origin', // or 'include' if your server and client are on different origins
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                 // Add any additional headers if required
    //             }
    //         });
    
    //         if (response.ok) {
    //             // Logout successful, redirect the user to the login page or perform any other action
    //             window.location.href = '/login'; // Redirect to login page
    //         } else {
    //             // Handle errors or display a message to the user
    //             console.error('Logout failed:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Logout failed:', error.message);
    //     }
    // }
    
    
    return (

        <div className="flex justify-between py-4 px-4" id = "Navbar--entire" >
            {/* left logo */}
            <div id = "Navbar--left" >
                <img src="../assets/react.svg" alt="Logo" id="Logo" /> 
                <h2 id="Site-name" >Campus Pulse</h2>
            </div>

            {/* right section */}
            <div className="flex gap-3">
                <Link to = "/" className= "" >Home</Link>
                <Link to = "/login" className= ""  > {status} </Link>
                
                 {/* Conditional rendering based on login status */}
                 {status ? (
                    <>
                        <Link to="/post">Post</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                
                
                
                
                {/* {(status === "Login") && <Link to="/login">Login</Link>}
                {(status === "Post") && <Link to="/post">Post</Link>}
                {(status === "Post") && <button onClick={handleLogout}>Logout</button>} */}
                
                
                {/* { (status === "Post") ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login" className="">Login</Link>
                )} */}
                

                {/* <Link to = "/about"  className= "" >AboutUs</Link> */}
                <Link to = "/contact" className= "" >Contact</Link>
            </div>

        </div>
    )
}

export default Navbar;