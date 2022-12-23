
import React from "react";
import "./Administrator.css";
//import Welcome from "../Welcome/Welcome.js"
import EventCodes from "./Eventscodes.js"



export default function Administrator(props) {
    return (
      <div className="administrator">
        {/* <Welcome/>     */}
        <EventCodes/>
      </div>
    );
  }