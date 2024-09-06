import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import Post from "../components/Post"
import "./Homepage.css"

function Homepage(){

    const [posts, setPosts ] = useState([])

    useEffect(()=>{

        const getPosts = async ()=>{
            
            try{
            const res = await axios.get("http://localhost:3000/api/v1/post/get-all-posts")
            setPosts(res.data.data)

            }catch(error){
                console.log("Unable to get posts")
                console.log(error)
            }

        }


        getPosts();

},[])
console.log(posts)
    return (
        <div className="Events">
             {
                posts.map((post ,index) => (
                    
                    <Post key={index}  chapterName={post.chapterName} typeofEvent={post.typeofEvent} titleOfEvent={post.titleOfEvent} descriptionOfEvent={post.descriptionOfEvent} dateofEvent={post.dateofEvent} registrationLink={post.registrationLink} className = "Events--singular" />
                    
                ))
            } 

            

        </div>
    )
}

export default Homepage;