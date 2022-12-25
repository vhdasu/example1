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
        
      </form>
    );
  }
}

export default FormAdmin;