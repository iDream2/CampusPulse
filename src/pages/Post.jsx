import React from "react"
import { useNavigate } from "react-router-dom"
export default function Post(event){

    // const [postForm, setpostForm ] = React.useState({
    //     eventName : "",
    //     eventType : "",
    //     eventForm : "",

    // })

    // function onPost(){
    //     setpostForm(
    //         {

    //         }
    //     )
    // }

        //Scrimba
    // function handleSubmit(event) {
    //     // console.log(event)
    //     const {name, value} = event.target

    //     setpostForm(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [name]: value
    //         }
    //     })
    // }

    const navigate = useNavigate();

    function handleClick(){
        navigate("/Home")
    }

    return(
        <div>Post Window

            <form action="">

                <label htmlFor="eventName">Event Name</label>
                <input type="text" 
                    name = "eventName"
                    id="eventName"
                    // value = {event.eventName}
                />
                
                <label htmlFor="eventType">Event Type</label>
                <input 
                type="text"  
                name = "eventType"
                id="eventType"
                // value = {event.eventType}
                />
                
                <label htmlFor="eventDescription">Event Description</label>
                <textarea 
                name="eventDescription"
                id="eventDescription" 
                cols="30"
                rows="10">
                
                </textarea>

                <label htmlFor="Date of event">Date of Event</label>
                <input type="date" id="Date of event" name="event-start" value="2024-04-22" min="2018-01-01" max="2025-12-31" />

               {/* <label htmlFor = "eventForm">Registration Link</label>  */}
                
                {/*for understanding sake */}
                {/* <input type="url" 
                name="eventForm" 
                id="eventForm" 
                placeholder="https://example.com" 
                pattern="https://.*" 
                size="30"
                required /> */}


                {/* <input type="text" 
                name = "eventForm"
                id = "eventForm"
                // value = {eventForm.value}
                /> */}

                <button onClick={handleClick} > POST </button>

            </form>


        </div>
    )
}