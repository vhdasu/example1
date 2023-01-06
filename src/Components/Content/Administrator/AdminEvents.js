import React, { PureComponent } from 'react'
import {API} from 'aws-amplify'
import "./Administrator";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'
import * as EdvStyles from '../../Styles/EdvStyles';

class AdminEvents extends PureComponent {
    constructor(props) {

        super(props); 
   
        this.state = {
          userid: props.userid,
          adminevents: [],
          admineventsupdated: props.admineventsupdated
        }; 

        this.getAdminEvents = this.getAdminEvents.bind(this);
        this.getStudentId = this.getStudentId.bind(this);
        this.renderAdminEvents = this.renderAdminEvents.bind(this);

  }     

  componentDidMount() {
    this.getAdminEvents()
  }

  async getAdminEvents()
  {
    // get all events that the admin generated
    
    let allevents = await API.graphql({
      query:queries.listEvents
    });

    //console.log(this.state.userid); 
    //console.log(allevents); 

    let adminid = this.state.userid;

    let thisadminevents = allevents.data.listEvents.items.filter( function(item){return (item.adminid === adminid);} );

    

    //console.log(thisadminevents);    


    //get students that claimed these events

    let studentevents = await API.graphql({
      query:queries.listStudentEvents
    });

    let students = await API.graphql({
      query:queries.listStudents
    });

    //console.log("list students");
    //console.log(students);  

    var parsed1 = thisadminevents.map(function (item) {
      return {

         // gets the event name, code, and point value

          eventcode: item.eventcode,
          eventname: item.eventname,
          eventpoints: item.eventpoints,

          // finds the student that claimed a particular code

          studentclaimed: studentevents.data.listStudentEvents.items.filter( function(item1){return (item1.eventcode === item.eventcode);} ).length === 0 ? "":
          studentevents.data.listStudentEvents.items.filter( function(item1){return (item1.eventcode === item.eventcode);} )[0].studentid         
      } 
    });
    //console.log(parsed1);
    

    var parsed = parsed1.map(function (item) {
      return {
          eventcode: item.eventcode,
          eventname: item.eventname,
          eventpoints: item.eventpoints,
          studentclaimed: item.studentclaimed.length === 0 ? "" :           
          students.data.listStudents.items.filter( function(item2){return (item2.id ===  item.studentclaimed)})[0].firstname + " " +
          students.data.listStudents.items.filter( function(item2){return (item2.id ===  item.studentclaimed)})[0].lastname
         
      } 

    });    

    console.log("parsed called");
    console.log(parsed[0].eventcode.substring(4, 12));

    parsed = parsed.sort((a, b) => a.eventcode.substring(4, 12) < b.eventcode.substring(4, 12)  ? 1 : -1 );

    this.setState({adminevents: parsed});
    //console.log(this.state.adminevents);
    //console.log(parsed);
 
  }

  async getStudentId()
  { 
    return "";
    
 }

 renderAdminEvents()
 {
  if(this.state.admineventsupdated)
  {
    console.log("admin events updated");
    this.getAdminEvents();
  }

  return (
    // displays all the events, codes, point values, and students that claimed the code
    <div className="adminevents"> 
      <br/>
      <EdvStyles.Title> Generated Codes</EdvStyles.Title>
      <table class="mytable">
        <thead>
          <tr>
            <th>Event Code</th>
            <th>Event Name</th>
            <th>Event Points</th> 
            <th>Claimed By</th> 
          </tr>
        </thead>
        <tbody >
          {this.state.adminevents.map((Event, index) => {
            return (
              <tr key={Event.eventcode}>
                <td>{Event.eventcode}</td>
                <td>{Event.eventname}</td>
                <td>{Event.eventpoints}</td>  
                <td>{Event.studentclaimed}</td>                   
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
 }

  render() {
  
    return (this.state === null) ? (<span> ...</span>) : this.renderAdminEvents() ;

   
        }
}

export default AdminEvents