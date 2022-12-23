import React, { Component } from "react";

class FormAdmin extends Component {
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
      <form onSubmit={this.formSubmit}>
        <h4>Create an event</h4>
        <input id="eventcode" type="text" defaultValue="" placeholder="Event Code..." />        
        <input  type="submit" value="submit" />
      </form>
    );
  }
}

export default FormAdmin;