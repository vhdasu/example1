import React, { PureComponent } from 'react'
import "./Header.css";
 
class Home extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  // displays home page
  render() {

    var handleToUpdate = this.props.handleToUpdate;

      //console.log("in home button render");
      //console.log(this.props.homebuttonclassname);

      return (

        <div className="home">
        <h7><button className={this.props.homebuttonclassname} onClick={() => handleToUpdate('home')}>{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default Home  