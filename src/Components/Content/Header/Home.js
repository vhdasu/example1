import React, { PureComponent } from 'react'
import "./Header.css";
 
class Home extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  handleClick() {
     alert("Button Clicked");
  }


  render() {
      return (

        <div className="home">
        <h7><button className="homebutton" onClick={this.handleClick} >{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default Home  