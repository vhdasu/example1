import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const eventid = form.elements["eventid"].value;
    const eventname = form.elements["eventname"].value;
    this.props.addPerson(eventname, eventid);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <h4>Add an event</h4>
        <input id="name" type="text" defaultValue="" placeholder="Event ID..." />
        {/* <input id="email" type="text" defaultValue="" placeholder="Email..." /> */}
        <input  type="submit" value="submit" />
      </form>
    );
  }
}

export default Form;