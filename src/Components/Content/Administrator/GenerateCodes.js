import {API, Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import "./Administrator.css";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'

class GenerateCodes extends PureComponent {
    constructor(props) {

        super(props); 

        this.state = {
          userid: props.userid
        }; 

        this.getEventTypeString = this.getEventTypeString.bind(this);
    };

   

  componentDidMount() {
    //console.log("Component did mount called");
    //this.getUserandId()
    ////console.log(this.state.userid)
  }



 

  yyyymmdd() {
    function twoDigit(n) { return (n < 10 ? '0' : '') + n; }

    var now = new Date();
    return '' + now.getFullYear() + twoDigit(now.getMonth() + 1) + twoDigit(now.getDate());
}


  async generateCodes() {

    //create 10 random codes
    let points = document.getElementById("Points").value;
    let eventtype = this.getEventTypeString();
    let numberofcodes = document.getElementById("numberofcodes").value;
    let todaydate =  this.yyyymmdd();
 
    for (let i = 0; i < Number(numberofcodes); i++) 
    {
      let randomNumber = this.getRndInteger(10000000, 99999999);

      let eventcode = eventtype + "_" + todaydate + "_" + randomNumber;
      
      let eventName = this.getEventName();

      //console.log(eventcode);
      //console.log(eventName)

      this.insertEventCode(eventcode, eventName, points )
    }        
  }

  async insertEventCode(code, name, points)
  {
    console.log(this.state.userid);

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


  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  getEventName()
  {

     let eventtype = Number(document.getElementById("eventtype").value);
    //console.log(eventtype);

    let getEventName = "";
    if(eventtype === 1)
    {
      getEventName = "Vollyball";
    }
    else if(eventtype === 2)
    {
      getEventName = "Football";
    }
    else if(eventtype === 3)
    {
      getEventName = "Swim";
    }
    else if(eventtype === 4)
    {
      getEventName = "Tennis";
    }
    else if(eventtype === 5)
    {
      getEventName = "Chess";
    }
    else if(eventtype === 6)
    {
      getEventName = "Robotics";
    }
    else if(eventtype === 7)
    {
      getEventName = "Debate";
    }
    else if(eventtype === 8)
    {
      getEventName = "Honor Society";
    }
    else if(eventtype === 9)
    {
      getEventName = "Winter Concert";
    }
    else if(eventtype === 10)
    {
      getEventName = "STEM Club";
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
      seventtype = "VOL";
    }
    else if(eventtype === 2)
    {
      seventtype = "FOO";
    }
    else if(eventtype === 3)
    {
      seventtype = "SWI";
    }
    else if(eventtype === 4)
    {
      seventtype = "TEN";
    }
    else if(eventtype === 5)
    {
      seventtype = "CHE";
    }
    else if(eventtype === 6)
    {
      seventtype = "ROB";
    }
    else if(eventtype === 7)
    {
      seventtype = "DEB";
    }
    else if(eventtype === 8)
    {
      seventtype = "HON";
    }
    else if(eventtype === 9)
    {
      seventtype = "CON";
    }
    else if(eventtype === 10)
    {
      seventtype = "STE";
    }

    //console.log(seventtype);
    return seventtype;
  }

  render() {
 
    return (
      <div className="generatecodes">
        
        <h4>Generate codes for an event</h4>
        <label>Event Type</label> <span/>
        <select id="eventtype">
          <option value="0">Select Event Type:</option>
          <option value="1">Vollyball</option>
          <option value="2">Football</option>
          <option value="3">Swim</option>
          <option value="4">Tennis</option>
          <option value="5">Chess</option>
          <option value="6">Robotics</option>
          <option value="7">Debate</option>
          <option value="8">Honor Society</option>
          <option value="9">Winter Concert</option>
          <option value="10">STEM Club</option>
        </select>    
        <br/><br/>
        <label align = "right">Points</label> <span/><span/><span/><span/> <span/> 
        <input  id="Points" type="text" defaultValue="5" placeholder="5" />     <br/>  <br/>        
        <label>Number of Codes</label> <span/>
        <input  id="numberofcodes" type="text" defaultValue="10" placeholder="10" />        
        <br/>        
        <br/>       
        <span/><span/><span/><span/><button onClick={this.generateCodes.bind(this)} className="generatecodesbutton">Generate Codes</button>
      </div>
    );
        }
}

export default GenerateCodes