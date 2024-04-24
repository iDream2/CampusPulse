import { Link, Outlet } from "react-router-dom"
import "./Navbar.css"
export default function Navbar(){
    return(
        <div className="navbar--body" >
        
                <div className= "navbar" >
                
                    <div className= "navbar--left" >
                        <img src="" alt="Logo" className="navbar--logo" />
                        <h3>Campus Pulse</h3>
                    </div>

                    <div className="navbar--right" >
                        <Link to = "/Home" className= "navbar--pages" >Home</Link>
                        <Link to = "/Login" className= "navbar--pages"  >Post/Login</Link>
                        <Link to = "/AboutUs" className= "navbar--pages" >AboutUs</Link>
                        <Link to = "/Contact" className= "navbar--pages" >Contact</Link>
                        
                    </div>

                </div>

        <Outlet/>
        
        </div>

        
    )
}