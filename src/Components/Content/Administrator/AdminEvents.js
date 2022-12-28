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
          adminevents: []
        }; 

        this.getAdminEvents = this.getAdminEvents.bind(this);
        this.getStudentId = this.getStudentId.bind(this);

  }     

  componentDidMount() {
    this.getAdminEvents()
  }

  async getAdminEvents()
  {
    // get all events belong to this admin 
    let allevents = await API.graphql({
      query:queries.listEvents
    });

    console.log(this.state.userid); 
    console.log(allevents); 

    let adminid = this.state.userid;

    let thisadminevents = allevents.data.listEvents.items.filter( function(item){return (item.adminid === adminid);} );

    

    console.log(thisadminevents);    


    //get students claimed this admin events
    let studentevents = await API.graphql({
      query:queries.listStudentEvents
    });

    let students = await API.graphql({
      query:queries.listStudents
    });

    console.log("list students");
    console.log(students);  

    var parsed1 = thisadminevents.map(function (item) {
      return {
          eventcode: item.eventcode,
          eventname: item.eventname,
          eventpoints: item.eventpoints,
          studentclaimed: studentevents.data.listStudentEvents.items.filter( function(item1){return (item1.eventcode === item.eventcode);} ).length === 0 ? "":
          studentevents.data.listStudentEvents.items.filter( function(item1){return (item1.eventcode === item.eventcode);} )[0].studentid         
      } 
    });
    console.log(parsed1);

    var parsed = parsed1.map(function (item) {
      return {
          eventcode: item.eventcode,
          eventname: item.eventname,
          eventpoints: item.eventpoints,
          studentclaimed: item.studentclaimed.length === 0 ? "" :           
          students.data.listStudents.items.filter( function(item2){return (item2.id ===  item.studentclaimed)})[0].name
         
      } 

    });    

    parsed = parsed.sort((a, b) => a.eventname > b.eventname  ? 1 : -1 );

    this.setState({adminevents: parsed});
    console.log(this.state.adminevents);


    console.log(parsed);
 
  }

  async getStudentId()
  { 
    return "";
    //return studentevents.data.listEvents.items.filter( function(item){return (item.eventcode === eventcode);} )[0].studentid;
 }

 renderAdminEvents()
 {
  return (
    <div className="adminevents"> 
 
      <EdvStyles.Title> My Events</EdvStyles.Title>
      <table class="mytable">
        <thead>
          <tr>
            <th>Event Code</th>
            <th>Event Name</th>
            <th>Event Points</th> 
            <th>Claimed By</th> 
          </tr>
        </thead>
        <tbody>
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