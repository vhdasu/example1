import {API, Auth} from 'aws-amplify'
import React from "react";
import "./Content.css";
import {withAuthenticator} from '@aws-amplify/ui-react'
import Points from "../Content/Points/Points"
import Welcome from "../Welcome/Welcome.js"
import AddEvent from './AddEvent/AddEvent';
import MyEvents from './MyEvents/MyEvents';



export default function Content(props) {
    return (
      <div className="content">
        <Welcome/>
        {/* <Points/>         */}
        <MyEvents/>       
      </div>
    );
  }