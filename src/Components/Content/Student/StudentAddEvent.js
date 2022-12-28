import React, { Component } from "react";
import "./Student.css"
import * as EdvStyles from  "../../Styles/EdvStyles"

class StudentAddEvent extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const eventcode = form.elements["eventcode"].value;
    this.props.addEvent(eventcode);
    form.reset();
  }

  render() {
    return (
      <form className = "studentaddevent" onSubmit={this.formSubmit}>        
        <h14>Add an event</h14><span/>
        <EdvStyles.Input  id="eventcode" type="text" defaultValue="" placeholder="Event Code..." />
        {/* //<input border-radius = "25px" classname = "input" id="eventcode"  type="text" defaultValue="" placeholder="Event Code..." />   <span/> */}
        {/* //<input type="submit" border-radius="25px" value="submit" /> */}
        <h7><button className="addeventbutton" onClick={() => this.formSubmit}> Submit </button></h7>
      </form>
    );
  }
}

export default StudentAddEvent;