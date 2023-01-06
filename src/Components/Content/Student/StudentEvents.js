import React, { PureComponent } from 'react'
import "./Student.css";
import "./TotalPoints"; 

class StudentEvents extends PureComponent {
    constructor(props) {

        super(props); 

    this.state = {
      events: props.events
    };    
  }     

  componentDidMount() {
 
  }

   // gets and displays previous student events, points, and code in a table
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
          <tbody-noborder>
            {this.props.events.map((Event, index) => {
              return (
                <tr key={Event.eventcode}>
                  <td>{Event.eventcode}</td>
                  <td>{Event.eventname}</td>
                  <td>{Event.eventpoints}</td>                   
                </tr>
              );
            })}
          </tbody-noborder>
        </table>
        <br/><br/><br/>
      </div>
    );      
  }


  render() {

    //console.log("In student events");
    //console.log(this.state.events);

    return (this.state === null  || this.state.events === null) ? (<span> ...</span>) : this.renderStudentEvents() ;
  }
    
}

export default StudentEvents