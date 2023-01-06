import React, { PureComponent } from 'react'
import "./HelpContact.css";
import { Auth} from 'aws-amplify'
 
class HelpContact extends PureComponent {
  constructor(props) {
      super(props)

       
  }

 


  render() {    
    
    return (      
      <div className = "helpcontact1">
 
      <h3><span/>FAQs</h3>

      <span/><span/><h9>Q: How do I add a new code?</h9><br/>
      <span/><span/><h8>A: Enter your code into the ‘Add Event Code’ text space, and click 'Submit'.</h8><br/><br/><br/>

      <span/><span/><h9>Q: I added my code, but it is not showing up under 'My Events'. What should I do?</h9><br/>
      <span/><span/><h8>A: Make sure that you entered your code correctly, and that you clicked 'Submit'. </h8><br/>
      <span/><span/><h8>   Remember that hyphens must be included and codes are case sensitive</h8><br/><br/><br/>

      <span/><span/><h9>Q: If I got chosen as a random winner for the quarter, how do I know what prize I got?</h9><br/>
      <span/><span/><h8>A: Go to the Prizes page on the menu. The number of points you have so far corresponds to the prize you earn</h8><br/><br/><br/>

      <span/><span/><h9>Q: Is it possible to win a prize twice by random selection?</h9><br/>
      <span/><span/><h8>A: No, you cannot win more than one prize by random selection.</h8><br/><br/><br/>

      <span/><span/><h9>Q: I’m an administrator, how do I generate a new code(s)?</h9><br/>
      <span/><span/><h8>A: Enter the event you want in the dropdown, select the point value, and enter the number of codes you want, and </h8><br/>
      <span/><span/><h8>click ‘Generate’</h8><br/><br/><br/>

      <span/><span/><h9>Q: I'm an administrator. How do I know if a code has been claimed by a student?</h9><br/>
      <span/><span/><h8>A: If a student's name appears in the fourth column, the code has been claimed and cannot be reused</h8><br/>
      <span/><span/><h8> by another student</h8><br/><br/><br/>

      <br/><br/>

      </div>
    );
  }
}

export default HelpContact  