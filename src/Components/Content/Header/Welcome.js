import React, { PureComponent } from 'react'
import {Auth} from 'aws-amplify'
import "./Header.css"

class Welcome extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
    }

     
    async componentDidMount() {

        let mes = await Auth.currentAuthenticatedUser().then(user => {return user.username;});

        //console.log(mes);

        this.setState({
            message: mes
        })

      }

    
     

    render() {
        return (
      
           <div className="welcome">
                         
            <h9>Welcome</h9>
            <br/>
            <h9>{this.state.message}</h9>
 
            </div>
        )
    }
}

export default Welcome 