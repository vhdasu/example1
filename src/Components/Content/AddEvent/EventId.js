import React, { PureComponent } from 'react'
import "./EventId.css"

class EventId extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (

            <div className="eventid">               
                <h8><label for="EventID">Event ID: </label>
                <input type="text" id="EventID1" name="EventID" placeholder="D326-234-1934"/></h8>
            </div>
           
        )
    }
}

export default EventId