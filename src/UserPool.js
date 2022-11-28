import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {

    UserPoolId: "us-west-2_tbtRJ1ZeL",
    ClientId: "3up0ejfr7u6efp8q24qkiu342s"

}

export default new CognitoUserPool(poolData);