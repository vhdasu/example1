import React, { PureComponent } from 'react'
import "./Header.css";
 
class PrizeInfoMenu extends PureComponent {
  constructor(props) {
      super(props)

 
  }

  
  render() {

    var handleToUpdate = this.props.handleToUpdate;

      return (

        <div className="prizeinfomenu">
        <h7><button  className={this.props.prizeinfobuttonclassname} onClick={() => handleToUpdate('prizeinfo')}>{this.props.message}</button></h7>
      </div>
         
      )
  }
}

export default PrizeInfoMenu  