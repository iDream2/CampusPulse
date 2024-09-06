import {Routes, Route} from "react-router-dom"
import './App.css'
import {Toaster} from "react-hot-toast"
import Homepage from "./pages/Homepages"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import PostPage from "./pages/PostPage"
import AboutUs from "./pages/AboutUsPage"
import Contact from "./pages/ContactPage"
function App() {
  

  return (
    <div className="w-screen h-screen">
      <Navbar />


      <Routes>
        <Route path = "/" element={<Homepage />} />
        <Route path = "/login" element={ <LoginPage />} />
        <Route path = "/post" element={<PostPage />} />
        {/* <Route path = "/about" element={<AboutUsPage />} /> */}
        <Route path = "/contact" element={<Contact />} />
            
      </Routes>

        
      <Toaster/>
    </ div>
  )
}

export default App
