
import React from "react";
import "./Content.css";
//import Welcome from "./Welcome/Welcome.js"
import MyEvents from './MyEvents/MyEvents';



export default function Content(props) {
    return (
      <div className="content">
        <MyEvents/>       
      </div>
    );
  }