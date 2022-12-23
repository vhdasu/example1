import React from "react";
import "./Header.css";
 import EdventureLogo from "./EdventureLogo.js";
 import Home from "./Home.js"
import LeaderBoard from "./LeaderBoard";
import PrizeInfo from "./PrizeInfo";
import HelpContact from "./HelpContact";
import SignOut from "./SignOut";
import Welcome from "./Welcome";



export default function Header(props) {
  return (
    <div className="header">
      <EdventureLogo message={props.message}/> 
      <Home message="HOME"/>
      <LeaderBoard message="LEADER BOARD"/>
      <PrizeInfo message="PRIZE INFORMATION"/>
      <HelpContact message="HELP/CONTACT"/>
      <SignOut message="SIGNOUT"/>
      <Welcome/>
    </div>
    
  );
}