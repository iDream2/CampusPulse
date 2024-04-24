
import { EventContext } from "./EventContext.jsx"

export default function Event(props){
    return(
        <div>
            <h1>{props.eventName} </h1>
            <h2>{props.eventType} </h2>
            <h2>{props.eventForm} </h2>
        </div>
    )
}