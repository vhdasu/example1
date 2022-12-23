import React from "react";
import "./Header.css";
 


export default function LeaderBoard(props) {
  return (
    <div className="leaderboard">
      <h7>{props.message}</h7>
    </div>
   
  );
}