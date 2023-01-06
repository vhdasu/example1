
import {API, Auth} from 'aws-amplify'
import React, { PureComponent } from 'react'
import * as queries from '../../../graphql/queries'
import "./Administrator.css";
import GenerateCodes from "./GenerateCodes";
import AdminEvents from "./AdminEvents";


class Administrator extends PureComponent {
  constructor(props) {

      super(props); 

      this.setState({
        userid: "",
        user:"",
        admineventsupdated:true
    })
 
    }


    componentDidMount() {
      //console.log("Component did mount called");
      this.getUserandId();
 
    }

    // checks if user and password are valid and categorized as admin
    async getUserandId()
  {

    let user = await Auth.currentAuthenticatedUser().then(user => {return user.username;});
    //console.log(user)
 

    let response1 = await API.graphql({
      query:queries.listAdministrators

      });

      //console.log(response1);

    let thisuserid = response1.data.listAdministrators.items.filter( function(item){return (item.administratorname === user);} )[0].id;

    //console.log(thisuserid);
    this.setState({userid: thisuserid});
    this.setState({username: user});  

  } 

  renderAdministrator()
  {
    return (      
      <div className="administrator">
        <GenerateCodes admineventsupdated = {this.state.admineventsupdated} userid={this.state.userid}/>
        <AdminEvents admineventsupdated = {this.state.admineventsupdated} userid={this.state.userid}/>
      </div>
    );
  }

  render() {
    //console.log(this.state.events); 
    //console.log(this.state); 
  
    return (this.state === null) ? (<span className="administrator"> Loading....Please wait.</span>) : this.renderAdministrator() ;
}

}

export default Administrator

 