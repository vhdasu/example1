import React, { PureComponent } from 'react'
import "./AddEvent.css"

class AddEvent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (

            <div className="addevent">
                <h4>Add an event to portfolio</h4>
                <h4><label for="EventID">Event ID: </label><input type="text" id="EventID1" name="EventID" placeholder="D326-234-1934"/></h4>
            </div>
           
        )
    }
}

export default AddEvent