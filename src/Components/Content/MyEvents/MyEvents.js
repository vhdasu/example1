import {API, Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import Form from "./Form";
import "./MyEvents.css";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'

class MyEvents extends PureComponent {
    constructor(props) {

        super(props); 

    this.state = {
      events: []
    };

    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  addEvent(eventname, eventid) {
    this.setState(prevState => ({
        events: [...prevState.Event, { eventname, eventid }]
    }));
  }

  componentDidMount() {
    this.getUser()
    this.fetchStudents()
  }

  async getUser() {

    let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});

    console.log(user);

    this.setState({
        message: user
    })

  }


  async fetchStudents(){

    let response1 = await API.graphql({
       query:queries.listStudents

   });

  let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});
  console.log(user);  

  let thisuserid = response1.data.listStudents.items.filter( function(item){return (item.name == user);} )[0].id;

  let studentevents = await API.graphql({
    query:queries.listStudentEvents
  });

  let allevents = await API.graphql({
    query:queries.listEvents
  });

  let thisstudentevents = studentevents.data.listStudentEvents.items.filter( function(item){return (item.studentid == thisuserid);} );
  console.log(thisstudentevents);  

   const relevantevents  = [];
  thisstudentevents.forEach((event) => {

    let event1 = allevents.data.listEvents.items.filter( function(item){return (item.eventcode == event.eventcode);} );
    relevantevents.push(event1[0]);
   });

   console.log(relevantevents);
   this.setState({events: relevantevents});
   const sum = relevantevents.reduce((acc, o) => acc + parseInt(o.eventpoints), 0)
   this.setState({totalpoints: sum})
 
  }
 



  deleteEvent(eventid) {
    return () => {
      this.setState(prevState => ({
        events: prevState.events.filter(Event => Event.eventid !== eventid)
      }));
    };
  }

  render() {
    console.log(this.state);

    return (
      <div className="myevents">
        <h4>Total Points: {this.state.totalpoints}</h4>
        <Form addEvent={this.addEvent} />
        <h4/>
        <table className = "myevents">
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
    );
        }
}

export default MyEvents