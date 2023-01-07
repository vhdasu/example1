
import {API, Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import * as queries from '../../../graphql/queries'
import "./Administrator.css";
import GenerateCodes from "./GenerateCodes";
import AdminEvents from "./AdminEvents";
import * as mutations from '../../../graphql/mutations'


class Administrator extends PureComponent {
  constructor(props) {

      super(props); 

      this.setState({
        userid: "",
        user:""      
    })
 
    this.getAdminEvents = this.getAdminEvents.bind(this);
    this.getUserandId = this.getUserandId.bind(this);

    }

    // list containing event names and short forms
    eventList= 
    [
      ["Honor Society", "HON"],
      ["Football Game",  "FTB"],
      ["Volleyball Game",  "VOL"],
      ["Basketball Game",  "BSK"],
      ["Orchestra Concert",  "ORC"],
      ["Band Concert",  "BND"],
      ["Mid-winter Social",  "SOC"],
      ["Choir Concert",  "CHR"],
      ["Badminton Game",  "BAD"],
      ["Tennis Game", "TEN"]
    ];


    componentDidMount() {
      //console.log("Component did mount called");
      this.getUserandId();
      //this.getAdminEvents();
 
    }

 

    // checks if user and password are valid and categorized as admin
    async getUserandId()
  {

    let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});
    //console.log(user)
 

    let response1 = await API.graphql({
      query:queries.listAdministrators

      });

      //console.log(response1);

    let thisuserid = response1.data.listAdministrators.items.filter( function(item){return (item.administratorname === user);} )[0].id;

    //console.log(thisuserid);
    this.setState({userid: thisuserid});
    this.setState({username: user});  

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

    // method utilizes Date Class to get the current date which will be included in the code
    yyyymmdd() {
      function twoDigit(n) { return (n < 10 ? '0' : '') + n; }
  
      var now = new Date();
      return '' + now.getFullYear() + twoDigit(now.getMonth() + 1) + twoDigit(now.getDate());
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
 
    console.log("get admin events called");
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

    // gets the short form for the events

    getEventName()
    {
  
       let eventtype = Number(document.getElementById("eventtype").value);
      //console.log(eventtype);
  
      let getEventName = "";
      if(eventtype === 1)
      {
        getEventName = this.eventList[0][0];
      }
      else if(eventtype === 2)
      {
        getEventName = this.eventList[1][0];
      }
      else if(eventtype === 3)
      {
        getEventName = this.eventList[2][0];
      }
      else if(eventtype === 4)
      {
        getEventName = this.eventList[3][0];
      }
      else if(eventtype === 5)
      {
        getEventName = this.eventList[4][0];
      }
      else if(eventtype === 6)
      {
        getEventName = this.eventList[5][0];
      }
      else if(eventtype === 7)
      {
        getEventName = this.eventList[6][0];
      }
      else if(eventtype === 8)
      {
        getEventName = this.eventList[7][0];
      }
      else if(eventtype === 9)
      {
        getEventName = this.eventList[8][0];
      }
      else if(eventtype === 10)
      {
        getEventName = this.eventList[9][0];
      }
  
      //console.log(getEventName);
      return getEventName;
    }
    
    getEventTypeString()
    {
      let eventtype = Number(document.getElementById("eventtype").value);
      //console.log(eventtype);
  
      let seventtype = "";
      if(eventtype === 1)
      {
        seventtype = this.eventList[0][1];
      }
      else if(eventtype === 2)
      {
        seventtype = this.eventList[1][1];
      }
      else if(eventtype === 3)
      {
        seventtype = this.eventList[2][1];
      }
      else if(eventtype === 4)
      {
        seventtype = this.eventList[3][1];
      }
      else if(eventtype === 5)
      {
        seventtype = this.eventList[4][1];
      }
      else if(eventtype === 6)
      {
        seventtype = this.eventList[5][1];
      }
      else if(eventtype === 7)
      {
        seventtype = this.eventList[6][1];
      }
      else if(eventtype === 8)
      {
        seventtype = this.eventList[7][1];
      }
      else if(eventtype === 9)
      {
        seventtype = this.eventList[8][1];
      }
      else if(eventtype === 10)
      {
        seventtype = this.eventList[9][1];
      }
  
      //console.log(seventtype);
      return seventtype;
    }



  generateCodes(eventtype, points, quantity)
  {
       // date that will be included in the code
       let todaydate =  this.yyyymmdd();

    // generates the number of inputted codes
    for (let i = 0; i < Number(quantity); i++) 
    {
      // random number that is a part of the code
      let randomNumber = this.getRndInteger(10000000, 99999999);

      let eventcode = eventtype + "_" + todaydate + "_" + randomNumber;
      
      let eventName = this.getEventName();

      
      // will insert the generated code
      this.insertEventCode(eventcode, eventName, points )
    }        

    this.getAdminEvents();
  }

  async insertEventCode(code, name, points)
  {
    //console.log(this.state.userid);

    let newevent = {
      adminid: this.state.userid,
      eventcode: code,
      eventname: name,
      eventpoints: points
    };

    let response = await API.graphql({
      query: mutations.createEvents,
      variables: {
        input: newevent
      }
    })

    //console.log(response);
  }


  renderAdministrator()
  {
            
    return ( 

      ((this.state === null) || (typeof(this.state.adminevents) === 'undefined')  || this.state.adminevents === null) ? (<span> ...</span>) : 

      
      <div className="administrator">
        <GenerateCodes generateCodes = {this.generateCodes.bind(this)} admineventsupdated = {this.state.admineventsupdated} userid={this.state.userid}/>
        <AdminEvents  userid={this.state.userid} adminevents = {this.state.adminevents}/>
      </div>
    );
  }

  render() {
    //console.log(this.state.events); 
    //console.log(this.state); 
  
    return (this.state === null) ? (<span className="administrator"> Loading....Please wait.</span>) : this.renderAdministrator() ;
}

}

export default Administrator

 