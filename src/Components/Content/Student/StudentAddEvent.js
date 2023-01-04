import React, { Component } from "react";
import "./Student.css"
import * as EdvStyles from  "../../Styles/EdvStyles"

class StudentAddEvent extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  // checks if a student has already added a code in the database
  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const eventcode = form.elements["eventcode"].value;
    this.props.addEvent(eventcode);
    form.reset();
  }
// if the code is not already claimed, the event will be added
  render() {
    return (
      <form className = "studentaddevent" onSubmit={this.formSubmit}>        
        <h14>Add an event</h14><span/>
        <EdvStyles.Input  id="eventcode" type="text" defaultValue="" placeholder="Event Code..." /><span/>
        <h7><button className="addeventbutton" onClick={() => this.formSubmit}> Submit </button></h7>
      </form>
    );
  }
}

export default StudentAddEvent;