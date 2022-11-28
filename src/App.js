
//import './App.css';
import {API} from 'aws-amplify'
import * as queries from './graphql/queries'
import * as mutations from './graphql/mutations'
import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

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


  return (
     <div>
      <h1>Hello World Dhruti!</h1>
      <p>Version 2amplify </p>
      <button onClick={fetchTodos}>Fetch Todo</button>
      <button onClick={createTodo}>Create Todo</button>
     </div>
  );
};

export default withAuthenticator(App);
