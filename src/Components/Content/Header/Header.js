import {React, PureComponent} from "react";
import "./Header.css";
 import EdventureLogo from "./EdventureLogo.js";
 import Home from "./Home.js"
import PrizeInfoMenu from "./PrizeInfoMenu";
 import HelpContact from "../HelpContact/HelpContact";
import SignOut from "./SignOut";
import Welcome from "./Welcome";
import Administrator from "../Administrator/Administrator";
import Student from "../Student/Student"
 import HelpContactMenu from "./HelpContactMenu";
 import PrizeInfo from "../PrizeInfo/PrizeInfo";
 import StandingsMenu from "./StandingsMenu";
 import Standings from "../Standings/Standings"
 
 



class Header extends PureComponent {
  constructor(props) {
      super(props)

      var handleToUpdate = this.handleToUpdate.bind(this);
      //this.handleHelpContactButton = this.handleHelpContactButton.bind(this);
      this.renderPage = this.renderPage.bind(this);
 
      
  }

  componentDidMount() {
    //console.log("Component did mount called");
    this.setState({activepage:"home"}); 

    this.setButtonStyles("home");
  }

  setButtonStyles(activepage)
  {
    this.setState({homebuttonclassname:"homebutton"});
    this.setState({standingsbuttonclassname:"homebutton"});
    this.setState({prizeinfobuttonclassname:"homebutton"});
    this.setState({helpcontactbuttonclassname:"homebutton"});
    this.setState({signoutbuttonclassname:"homebutton"});
    this.setState({homebuttonclassname:"homebutton"});
    this.setState({standingsbuttonclassname:"homebutton"});
    this.setState({prizeinfobuttonclassname:"homebutton"});
    this.setState({helpcontactbuttonclassname:"homebutton"});
    this.setState({signoutbuttonclassname:"homebutton"});

    // highlights current page location
    if(activepage === "home")
    {
      this.setState({homebuttonclassname:"homebuttonhighlighted"});
    }
    else if (activepage === "standings")
    {
      this.setState({standingsbuttonclassname:"homebuttonhighlighted"});
    }
    else if (activepage === "helpcontact")
    {
      this.setState({helpcontactbuttonclassname:"homebuttonhighlighted"});
    }
    else if (activepage === "prizeinfo")
    {
      this.setState({prizeinfobuttonclassname:"homebuttonhighlighted"});
    }
    else if (activepage === "singout")
    {
      this.setState({signoutbuttonclassname:"homebuttonhighlighted"});
    }

  }


  handleToUpdate(activepage){
    //alert('We pass argument from Child to Parent: ' + someArg);
    this.setState({activepage:activepage}); 

    this.setButtonStyles(activepage)
    
  }

  // displays page on screen
  renderPage()
  {
    var handleToUpdate = this.handleToUpdate;

    // top menu content. Will display on every page.
    let topmenu = 
    [
     <EdventureLogo  message={this.props.message}/> ,
     <Home  homebuttonclassname = {this.state.homebuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="HOME"/>,
     <StandingsMenu standingsbuttonclassname = {this.state.standingsbuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="STANDINGS"/>,     
     <PrizeInfoMenu prizeinfobuttonclassname = {this.state.prizeinfobuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="PRIZE INFORMATION"/>,     
     <HelpContactMenu helpcontactbuttonclassname = {this.state.helpcontactbuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="SUPPORT"/>,
     <SignOut signoutbuttonclassname = {this.state.signoutbuttonclassname} message="SIGNOUT"/>, <Welcome/>
    ];

    //console.log(this.state.activepage);

    let wholepage = null;    

    // if home page button is clicked, the homepage will display
     if(this.state.activepage === "home")
    {
      //console.log("in header:" + this.props.isadministrator);            
     // if 'isadministrator' is true, will display Administrator homepage
      if (this.props.isadministrator)
      {
          wholepage =  [topmenu, <Administrator/>];
      }
      // else, will display Student homepage
      else
      {
        wholepage =  [topmenu, <Student/>];
      }
    }
    // will display standings page
    else if (this.state.activepage === "standings")
    {
      //console.log(this.state.activepage);

      // if the user is an Administrator, a different page will be displayed including winner and report generators
      wholepage =  [topmenu, <Standings isadministrator = {this.props.isadministrator} />];      
    }
    // will diplay help/contact page. This page is the same for both administrators and students
    else if (this.state.activepage === "helpcontact")
    {
      //console.log(this.state.activepage);
      wholepage =  [topmenu, <HelpContact/>];      
    }

    // will display prize information. This page is the same for both the administrators and students
    else if (this.state.activepage === "prizeinfo")
    {
      //console.log(this.state.activepage);
      wholepage =  [topmenu, <PrizeInfo/>];      
    }

    // returns page based on what the user wants
    return(
      <div className = "wholepage">
        {wholepage}           
    </div>
    );
  }

  render() {
     
      if(this.state === null)
      {
          return <h24>...</h24>
      }
      else
      {
 
        return  this.renderPage();
      }
  }
}

export default Header  
 