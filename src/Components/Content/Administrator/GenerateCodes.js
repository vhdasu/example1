import {API, Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import "./Administrator.css";
import * as mutations from '../../../graphql/mutations'
import * as EdvStyles from '../../Styles/EdvStyles';

class GenerateCodes extends PureComponent {
    constructor(props) {

        super(props); 

        this.state = {
          userid: props.userid
        }; 

        this.getEventTypeString = this.getEventTypeString.bind(this);
    };


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

  

  render() {
 
    return (
      <div className="generatecodes">
         <EdvStyles.Line/>
        <EdvStyles.Title>Generate codes for an event</EdvStyles.Title>
        <EdvStyles.Label>Event Type</EdvStyles.Label> <span/><span/><span/><span/>
        <EdvStyles.Select id="eventtype">
          <option value="0">Select Event Type:</option>
          <option value="1">{this.eventList[0][0]}</option>
          <option value="2">{this.eventList[1][0]}</option>
          <option value="3">{this.eventList[2][0]}</option>
          <option value="4">{this.eventList[3][0]}</option>
          <option value="5">{this.eventList[4][0]}</option>
          <option value="6">{this.eventList[5][0]}</option>
          <option value="7">{this.eventList[6][0]}</option>
          <option value="8">{this.eventList[7][0]}</option>
          <option value="9">{this.eventList[8][0]}</option>
          <option value="10">{this.eventList[9][0]}</option>
        </EdvStyles.Select>    
        <br/><br/>
        <EdvStyles.Label align = "right">Points</EdvStyles.Label> <span/><span/><span/><span/> <span/> <span/> <span/> 
        <EdvStyles.Input  id="Points" type="text" defaultValue="5" placeholder="5" />     <br/>  <br/>        
        <EdvStyles.Label>Number of Codes</EdvStyles.Label> <span/> 
        <EdvStyles.Input  id="numberofcodes" type="text" defaultValue="10" placeholder="10" />        
        <br/>        
        <br/>       
        <span/><span/><span/><span/><span/><span/><span/><span/><span/><EdvStyles.Button onClick={this.generateCodes.bind(this)} className="generatecodesbutton">Generate Codes</EdvStyles.Button>
        <EdvStyles.Line/>
      </div>
    );
        }
}

export default GenerateCodes