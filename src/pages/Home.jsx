import Event from "./Event"

export default function Home(){

    //fetch

 const eventNamefromAPI = "techie-techie"
 const eventTypefromAPI = "Tech"
 const eventFormfromAPI = "abc@google.com"
     return(
        <div>
            <Event
                eventName = {eventNamefromAPI}
                eventType = {eventTypefromAPI}
                //date of the event here
                eventForm = {eventFormfromAPI}
            />
            <Event
                eventName = {eventNamefromAPI}
                eventType = {eventTypefromAPI}
                //date of the event here
                eventForm = {eventFormfromAPI}
            />


        </div>
    )
}