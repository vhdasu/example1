import React, { PureComponent } from 'react'
import "./Student.css";
import "./TotalPoints";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'

class StudentEvents extends PureComponent {
    constructor(props) {

        super(props); 

    this.state = {
      events: props.events
    };    
  }     

  componentDidMount() {
 
  }

  renderStudentEvents()
  {
    return (
      <div className="studentevents"> 
   
        <h14> My Events</h14>
        <table class="mytable">
          <thead>
            <tr>
              <th>Event Code</th>
              <th>Event Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.props.events.map((Event, index) => {
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
    );      
  }


  render() {

    console.log("In student events");
    console.log(this.state.events);

    return (this.state === null  || this.state.events === null) ? (<span> ...</span>) : this.renderStudentEvents() ;
  }
    
}

export default StudentEvents