import React from "react";
import {API} from 'aws-amplify'
import "./Sidebar.css";
 
 

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <h3>{props.message}</h3>
      <h3>Leader Board</h3>
      <h3>Account</h3>
      <h3>Help/Contact</h3>
      <h3>Sign out</h3>
    </div>
  );
}