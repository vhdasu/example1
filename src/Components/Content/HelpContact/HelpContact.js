import React, { PureComponent } from 'react'
import "./HelpContact.css";
import { Auth} from 'aws-amplify'
 
class HelpContact extends PureComponent {
  constructor(props) {
      super(props)

       
  }

 


  render() {    
    
    return (      
      <div className = "helpcontact">
 
      <h3>FAQ</h3>

      <h9>Q: I entered my code, but it is not showing up. What should I do now?</h9><br/>
      <h8>A: Double check that you’ve entered the correct code. The code is case sensitive, 9 characters long, and you must enter the hyphens.</h8><br/><br/><br/>

      <h9>Q: If I got chosen as a random winner for the quarter, how do I know what prize I got?</h9><br/>
      <h8>A: Go to the Prizes page on the menu. The number of points you have so far corresponds to the prize you earn</h8><br/><br/><br/>

      <h9>Q: Is it possible to win a prize twice by random selection?</h9><br/>
      <h8>A: No, you cannot win more than one prize by random selection.</h8><br/><br/><br/>

      <h9>Q: How do I add a new code?</h9><br/>
      <h8>A: Enter your code into the ‘Add Event Code’ text space, and click ‘+’</h8><br/><br/><br/>

      <h9>Q: I’m an administrator, how do I generate a new code(s)?</h9><br/>
      <h8>A: Enter the event you want in the dropdown, select the point value, and enter the number of codes you want, and click ‘Generate’</h8><br/><br/><br/>

      <br/><br/>
      <h9>For more information or additional help, please contact</h9><br/>
      <h8>Email: support@edventure.com</h8><br/>
      <h8>Phone: (432) 567-7890</h8><br/>

      </div>
    );
  }
}

export default HelpContact  