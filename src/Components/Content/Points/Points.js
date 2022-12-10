import {API, Auth} from 'aws-amplify'
import React from "react";
import "./Points.css";
import {withAuthenticator} from '@aws-amplify/ui-react'

 
async function getUser(){

    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      return user.username;
    })
     
}

export default function Points(props) {
    return (
      <div className="points">

        {/* <button onClick={getUser}>getUser</button>         */}
        <h4>Total Points: 10 for {getUser()}</h4>
        <h4>Upcoming Events</h4>
        
      </div>
    );
  }