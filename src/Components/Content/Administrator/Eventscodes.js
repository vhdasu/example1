import {Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import FormAdmin from "./FormAdmin.js";
import "./Administrator.css";
import "../Student/Student.css";
 

class EventCodes extends PureComponent {
    constructor(props) {

        super(props); 

    this.state = {
      events: []
    };
  }


   

  componentDidMount() {
    //console.log("Component did mount called");
   
  }
  // enters the user that the code has been claimed by
  async getUser() {

    let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});

    ////console.log(user);

    this.setState({
        message: user
    })

  }

 

  render() {
    // displays event name, event code, and point value
    return (
      <div className="eventcodes">
        
        <FormAdmin/>      
        <h4/>

        <div id="table-scroll">
        <table class="mytable">
          <thead>
            <tr>
              <th>Event Code</th>
              <th>Event Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map((Event, index) => {
              return (
                <tr key={Event.eventcode}>
                  <td>{Event.eventcode}</td>
                  <td>{Event.eventname}</td>
                  <td>{Event.eventpoints}</td>                   
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    );
        }
}

export default EventCodes