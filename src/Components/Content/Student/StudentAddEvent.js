import React, { Component } from "react";
import "./Student.css"

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
        <h14>Add an event     </h14>
        <input classname = "input" id="eventcode"  type="text" defaultValue="" placeholder="Event Code..." />   <span/>
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default StudentAddEvent;