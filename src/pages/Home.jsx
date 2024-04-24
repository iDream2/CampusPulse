import Event from "./Event"

export default function Home(){

     return(
        <div>
            <Event
                eventName = "techie-techie"
                eventType = "Tech"
                //date of the event here
                eventForm = "abc@google.com"
            />
        </div>
    )
}