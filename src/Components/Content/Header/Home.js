import React, { PureComponent } from 'react'
import "./Header.css";
 
class Home extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }


  render() {

    var handleToUpdate = this.props.handleToUpdate;

      return (

        <div className="home">
        <h7><button className="homebutton" onClick={() => handleToUpdate('home')}>{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default Home  