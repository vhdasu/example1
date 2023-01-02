import React from "react";
import "./Header.css";
 


export default function EdventureLogo(props) {
  return (
    <div className="edventurelogo">
      <img src={require('../../../pic/edventure.png')}/>
      <span/><h24>{props.message}</h24>            
    </div>
   
  );
}