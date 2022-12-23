 
import '@aws-amplify/ui-react/styles.css';
import "./Sidebar1.css"
import React, { PureComponent } from 'react'
import { Auth} from 'aws-amplify'
 

class Sidebar1 extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
          message:'Hello'
      }
  }

  componentDidMount() {
    console.log("Sidebar1: Component did mount called");
 
  }

  signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  
  render() {

    return (
      <div className="sidebar1">
        <h3>{this.props.message}</h3>
        <h3>Leader Board</h3>
        <h3>Account</h3>
        <h3>Help/Contact</h3>
        <button onClick={this.signOut} className="signOutButton">SignOut</button>
      </div>
    );
  }
}

export default Sidebar1