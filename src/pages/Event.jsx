import "./Event.css"
import { EventContext } from "./EventContext.jsx"

//API will fetch a value of array of objects


export default function Event(props){
    return(
        <div className="Events" >
            <h1>{props.eventName} </h1>
            <h2>{props.eventType} </h2>
            <h2>{props.eventForm} </h2>
        </div>
    )
}