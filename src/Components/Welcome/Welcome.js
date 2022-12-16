import React, { PureComponent } from 'react'
import {API, Auth} from 'aws-amplify'

class Welcome extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message:'Hello'
        }
    }

     
    

   async clickHandler()
   {
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
            {/* <h4>{this.clickHandler.bind(this)}</h4>
            <h4>Welcome {this.state.message}</h4> */}
         
            <button onClick = {this.clickHandler.bind(this)}>Hello</button>
            </div>
        )
    }
}

export default Welcome 