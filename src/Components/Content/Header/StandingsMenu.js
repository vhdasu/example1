import React, { PureComponent } from 'react'
import "./Header.css";
 
class StandingsMenu extends PureComponent {
  constructor(props) {
      super(props)

 
  }

  
  render() {

    var handleToUpdate = this.props.handleToUpdate;

      return (

        <div className="standingsmenu">
        <h7><button className="prizeinfobutton" onClick={() => handleToUpdate('standings')}>{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default StandingsMenu  