import React, { PureComponent } from 'react'
import "./PrizeInfo.css";
import { Auth} from 'aws-amplify'
 
class PrizeInfo extends PureComponent {
  constructor(props) {
      super(props)

       
  }

 


  render() {    
    
    return (      
      <div className = "prizeinfo1">
 
      <h3><span/>Prizes</h3>

      <span/><span/><h9>Quarter Prizes:</h9>    <br/>   
      <span/><span/><span/><span/><h8>Given to 4 students every quarter (1 random recipient each grade level, amount of points translates to prize)</h8><br/>
      <span/><span/><span/><span/><h8>0-50 Points: Candy</h8><br/>
      <span/><span/><span/><span/><h8>50-100 Points: School Shirt </h8><br/>
      <span/><span/><span/><span/><h8>100-150 Points: King Sized Candy Bar </h8><br/>
      <span/><span/><span/><span/><h8>150-200 Points: Pizza Party for Advisory Class</h8><br/><br/><br/><br/>



      <span/><span/><h9>Top Point Accumulation Prize:</h9><br/>
      <span/><span/><span/><span/><h8>Given to 1 student with highest number of points at the end of the year</h8><br/>
      <span/><span/><span/><span/><h8>School Shirt</h8><br/>
      <span/><span/><span/><span/><h8>King Size Candy</h8><br/>
      <span/><span/><span/><span/><h8>Bar Pizza Party for Advisory Class</h8><br/>
      <span/><span/><span/><span/><h8>Principal for the Day</h8><br/>
      <span/><span/><span/><span/><h8>Trophy</h8><br/>

      </div>
    );
  }
}

export default PrizeInfo  