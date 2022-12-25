import {API, Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import StudentAddEvent from "./StudentAddEvent";
import StudentEvents from "./StudentEvents"
import "./Student.css";
import "./TotalPoints";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'
import TotalPoints from './TotalPoints';

class Student extends PureComponent {
    constructor(props) {

        super(props); 

    this.state = {
      events: []
    };

    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  // addEvent(eventname, eventid) {
  //   this.setState(prevState => ({
  //       events: [...prevState.Event, { eventname, eventid }]
  //   }));
  // }

  componentDidMount() {
    //console.log("Component did mount called");
    this.getUser()
    this.fetchStudents()
  }

  async getUser() {

    let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});

    ////console.log(user);

    this.setState({
        message: user
    })

  }


  async fetchStudents(){

    ////console.log("Fetch students called");

    let response1 = await API.graphql({
       query:queries.listStudents

   });

  let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});
  ////console.log("User:");
  ////console.log(user);  

  let thisuserid = response1.data.listStudents.items.filter( function(item){return (item.name === user);} )[0].id;
  this.setState({userid:thisuserid});

  let studentevents = await API.graphql({
    query:queries.listStudentEvents
  });
  ////console.log("Student Events");
  ////console.log(studentevents);

  let allevents = await API.graphql({
    query:queries.listEvents
  });
  this.setState({allevents: allevents.data.listEvents.items});

  ////console.log("Got all events");
  ////console.log(allevents);

  let thisstudentevents = studentevents.data.listStudentEvents.items.filter( function(item){return (item.studentid === thisuserid);} );
  ////console.log(thisstudentevents);  

 // //console.log("Got this student events");

   const relevantevents  = [];
  thisstudentevents.forEach((event) => {

    let event1 = allevents.data.listEvents.items.filter( function(item){return (item.eventcode === event.eventcode);} );
    relevantevents.push(event1[0]);
   });

   //console.log("Got relevant events");
   //console.log(relevantevents);

   this.setState({events: relevantevents});
   ////console.log("Set events");
   ////console.log(this.state.events);


   const sum = relevantevents.reduce((acc, o) => acc + parseInt(o.eventpoints), 0)
   this.setState({totalpoints: sum})
 
   ////console.log("Fetch student last line");
   ////console.log(relevantevents);
  }
 
  async eventExists(eventcode)
  {
    let itemcount =  this.state.events.filter( function(item){return (item.eventcode === eventcode);}).length
    ////console.log(itemcount !== 0);
    return itemcount !== 0
  }

  async eventCodeValid(eventcode)
  {
    let itemcount =  this.state.allevents.filter( function(item){return (item.eventcode === eventcode);}).length
    ////console.log(itemcount !== 0);
    return itemcount === 1
  }


  async addEvent(eventcode)
  {
    let eventexists = await (this.eventExists(eventcode));
    let eventCodeValid = await (this.eventCodeValid(eventcode));

    //console.log(eventCodeValid);

    if (!eventCodeValid)
    {
      alert("Event code is not valid. Check the event code and retry.");
    }
    else 
    if (eventexists)
    {
      alert("Event already included");
    }
    else
    {
        let newevent = {
          eventcode: eventcode,
          studentid: this.state.userid
        };

        let response = await API.graphql({
          query: mutations.createStudentEvents,
          variables: {
            input: newevent
          }
        })

        ////console.log(response);

        this.fetchStudents();
      }
  }


  deleteEvent(eventid) {
    return () => {
      this.setState(prevState => ({
        events: prevState.events.filter(Event => Event.eventid !== eventid)
      }));
    };
  }

  render() {
    //console.log(this.state.events);

    return (
      <div className="student">

        <TotalPoints totalpoints = {this.state.totalpoints} />
         <StudentAddEvent addEvent={this.addEvent} />
        <StudentEvents events = {this.state.events}/>
      
      </div>
    );
        }
}

export default Student