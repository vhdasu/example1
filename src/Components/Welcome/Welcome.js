import React, { PureComponent } from 'react'
import {API, Auth} from 'aws-amplify'

class Welcome extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
    }

     
    async componentDidMount() {

        let mes = await Auth.currentAuthenticatedUser().then(user => {return user.username;});

        console.log(mes);

        this.setState({
            message: mes
        })

      }

    
     

    render() {
        return (
      
           <div className="welcome">
                         
            <h4>Welcome {this.state.message}</h4>
 
            </div>
        )
    }
}

export default Welcome 