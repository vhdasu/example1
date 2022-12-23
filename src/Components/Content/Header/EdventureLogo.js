import React from "react";
import "./Header.css";
 


export default function EdventureLogo(props) {
  return (
    <div className="edventurelogo">
      <h4>{props.message}</h4>
    </div>
   
  );
}