
//import './App.css';
import {API, Auth} from 'aws-amplify'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import Header from "./Components/Header/Header"
import Content from "./Components/Content/Content.js"
import Sidebar from "./Components/Sidebar/Sidebar.js"


function App() {

  async function createTodo()
  {

    let myTodo = {
      name:"Todo Das",
      description:"Das Description"
    };

    let response = await API.graphql({
      query: mutations.createTodo,
      variables: {
        input: myTodo
      }
    })

    console.log(response);
  }

  async function fetchTodos(){

     

    let response = await API.graphql({
        query:queries.listTodos

    });
    console.log(response);

  }

  async function getUser(){

    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log(user);
      return user.username;
    })
     
}

  
  return (
     <div>
      
      <Header title="We Do" subtitle="A place to search for excellence" />
      <Content message=""/>
      <Sidebar message="Prize Info"/>

      {/* <h1>Hello World Dhruti!</h1>
      <button onClick={fetchTodos}>Fetch Todo</button>
      <button onClick={createTodo}>Create Todo</button> */}

     </div>
     
  );
};

export default withAuthenticator(App);
