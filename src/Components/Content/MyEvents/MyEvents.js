import {API} from 'aws-amplify'
import React, { PureComponent } from 'react'
import Form from "./Form";
import "./MyEvents.css";
import * as queries from '../../../graphql/queries'
import * as mutations from '../../../graphql/mutations'

class MyEvents extends PureComponent {
    constructor(props) {

        super(props); 

    this.state = {
      events: []
    };

    this.addEvent = this.addEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
  }

  addEvent(eventname, eventid) {
    this.setState(prevState => ({
        events: [...prevState.Event, { eventname, eventid }]
    }));
  }

  componentDidMount() {
    //this.getEvents();
    this.fetchTodos()

    //this.setState({ events: response })
  }

 

  getEvents() {
    //fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("../../../../data/events.json")
    fetch('../../../../data/people.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
    //fetch("../../../../data/people.json")
      .then(response => response.json())
      .then(response => this.setState({ events: response }))
      .catch(error => console.log(error));
  }

  deleteEvent(eventid) {
    return () => {
      this.setState(prevState => ({
        events: prevState.events.filter(Event => Event.eventid !== eventid)
      }));
    };
  }

  async fetchTodos(){

     let response1 = await API.graphql({
        query:queries.listTodos

    });

    this.setState({events: response1.data.listTodos.items});
  
    console.log(response1.data.listTodos.items[0]);     

  }


  render() {
    console.log(this.state);

    return (
      <div className="myevents">
        <Form addEvent={this.addEvent} />
        <h4/>
        <table className = "myevents">
          <thead>
            <tr>
              <th>Event Id</th>
              <th>Event Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map((Event, index) => {
              return (
                <tr key={Event.id}>
                  <th>{index + 1}</th>
                  <td>{Event.name}</td>
                  <td>{Event.description}</td>
                  {/* <td>
                    <button onClick={this.deleteEvent(Event.email)}>
                      Delete
                    </button>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
        }
}

export default MyEvents