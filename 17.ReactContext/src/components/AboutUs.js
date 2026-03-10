import User from "./User";
import UserClass from "./UserClass";
import { Component, useContext } from "react";
import UserContext from "../utils/UserContext";

class AboutUs extends Component {

  constructor(props) {
    super(props);
    
  }
 
  render() {

    return (
      <div>
        <UserClass />
        {/* //!this is another way of using context without hooks */}
        <UserContext.Consumer>
          {(data)=><div className="text-bold text-center">LoggedInUser : {data.loggedInUser}</div>}
          </UserContext.Consumer>
         
      </div>
    );
  }
}

export default AboutUs;
