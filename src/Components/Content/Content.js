import {API, Auth} from 'aws-amplify'
import React from "react";
import "./Content.css";
import {withAuthenticator} from '@aws-amplify/ui-react'
import Points from "../Content/Points/Points"

async function getUser(){

     console.log(Auth.currentAuthenticatedUser().username);     
}


export default function Content(props) {
    return (
      <div className="content">
        {/* {getUser()} */}
        <h1>Welcome {props.message}</h1>
        <Points/>
        
      </div>
    );
  }