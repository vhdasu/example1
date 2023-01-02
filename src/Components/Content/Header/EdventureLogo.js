import React from "react";
import "./Header.css";
 


export default function EdventureLogo(props) {
  return (
    <div className="edventurelogo">
      <span/><span/><span/><img src={require('../../../pic/edventure.png')}/>
      <h24>{props.message}</h24>
      
      
    </div>
   
  );
}