import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {

  constructor(props) {
    super(props);
    
  }
 
  render() {
    return (
      <div>

        <div>
          <h1>About us page</h1>
        </div>
        <UserClass />

      </div>
    );
  }
}

export default AboutUs;
