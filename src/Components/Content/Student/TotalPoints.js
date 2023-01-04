import React, { PureComponent } from 'react'
 import "./Student.css";
 

class TotalPoints extends PureComponent {
    constructor(props) {

        super(props); 

 
    };

   componentDidMount() {
    //console.log("Component did mount called");
 
  }

   

  render() {
    ////console.log(this.state);
    // gets and displays the total numbe of points that the student has so far
    return (
      <div className="totalpoints">
        <h4>{this.props.totalpoints} Points</h4>
          
      </div>
    );
        }
}

export default TotalPoints