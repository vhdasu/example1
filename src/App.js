 import {withAuthenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import React, { PureComponent } from 'react'
import {API, Auth} from 'aws-amplify'
import * as queries from './graphql/queries'
import Administrator from './Components/Content/Administrator/Administrator';
import Header from "./Components/Content/Header/Header.js"
import Student from './Components/Content/Student/Student.js';


class App extends PureComponent {
  constructor(props) {
      super(props)

      this.state = {
          message:'Hello'
      }
  }

  componentDidMount() {
    console.log("APP: Component did mount called");
    this.isAdmnistrator();
  }

  signOut = () => {
    Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }


  async isAdmnistrator() {

    console.log("APP: isAdministrator called");

    let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});
    let alladministrators = await API.graphql({
      query:queries.listAdministrators
    });

    console.log(alladministrators)

    let isadministrator = (alladministrators.data.listAdministrators.items.filter( function(item){return (item.administratorname === user);} ).length ===1);    
    this.setState({isAdministrator: isadministrator})
    console.log(this.state.isAdministrator);    
  }


  render() {

    if(!this.state.isAdministrator)
    {
      return (
            
        <div>         
          <Header message = "EDventure"/>         
          <Student/>
        </div>
      );
    }
    else
    {
      return (            
        <div>                      
        <Header message = "EDventure"/>

        </div>
      );
    }
    }
}

export default withAuthenticator(App);
 