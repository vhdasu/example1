import React from "react";
import {API} from 'aws-amplify'
import "./Header.css";
import "../Content/Content.js"
import * as queries from "../../graphql/queries"
import * as mutations from "../../graphql/mutations"

async function fetchTodos(){

     

  let response = await API.graphql({
      query:queries.listTodos

  });
  console.log(response);

}

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
}