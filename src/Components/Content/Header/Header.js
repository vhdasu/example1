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


  renderPage()
  {
    var handleToUpdate = this.handleToUpdate;

    let topmenu = 
    [
     <EdventureLogo  message={this.props.message}/> ,
     <Home  homebuttonclassname = {this.state.homebuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="HOME"/>,
     <StandingsMenu standingsbuttonclassname = {this.state.standingsbuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="STANDINGS"/>,     
     <PrizeInfoMenu prizeinfobuttonclassname = {this.state.prizeinfobuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="PRIZE INFORMATION"/>,     
     <HelpContactMenu helpcontactbuttonclassname = {this.state.helpcontactbuttonclassname} handleToUpdate = {handleToUpdate.bind(this)} message="HELP/CONTACT"/>,
     <SignOut signoutbuttonclassname = {this.state.signoutbuttonclassname} message="SIGNOUT"/>, <Welcome/>
    ];

    console.log(this.state.activepage);

    let wholepage = null;    


     if(this.state.activepage === "home")
    {
      console.log("in header:" + this.props.isadministrator);            

      if (this.props.isadministrator)
      {
          wholepage =  [topmenu, <Administrator/>];
      }
      else
      {
        wholepage =  [topmenu, <Student/>];
      }
    }
    else if (this.state.activepage === "standings")
    {
      //console.log(this.state.activepage);
      wholepage =  [topmenu, <Standings/>];      
    }
    else if (this.state.activepage === "helpcontact")
    {
      //console.log(this.state.activepage);
      wholepage =  [topmenu, <HelpContact/>];      
    }
    else if (this.state.activepage === "prizeinfo")
    {
      console.log(this.state.activepage);
      wholepage =  [topmenu, <PrizeInfo/>];      
    }


    return(
      <div className = "wholepage">
        {wholepage}           
    </div>
    );
  }

  render() {
     
      if(this.state === null)
      {
          <h4>...</h4>
      }
      else
      {
        return  this.renderPage();
      }
  }
}

export default Header  
 