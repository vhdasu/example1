import React, { PureComponent } from 'react'
import "./Header.css";
import { Auth} from 'aws-amplify'
 
class SignOut extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  handleClick() {
     Auth.signOut()
     .then(data => console.log(data))
     .catch(err => console.log(err));
  }


  render() {
      return (

        <div className="signout">
        <h7><button className={this.props.signoutbuttonclassname} onClick={this.handleClick} >{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default SignOut  