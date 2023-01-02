import React, { PureComponent } from 'react'
import "./Header.css";
 
class HelpContactMenu extends PureComponent {
  constructor(props) {
      super(props)

 
  }

  
  render() {

    var handleToUpdate = this.props.handleToUpdate;

      return (

        <div className="helpcontactmenu">
        <h7><button className={this.props.helpcontactbuttonclassname}  onClick={() => handleToUpdate('helpcontact')}>{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default HelpContactMenu  