import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class AboutUs extends Component {

  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    // this.sd =   setInterval(()=>{
    //   console.log("Heloo World")
    // },1000)
  }
  
  
  //! part-7 why we need this unmount 
  componentWillUnmount(){
    // clearInterval(this.sd)
  } // only senior dev whuld stop thuis process they should be care about those all little things or perfomence loss will happen

  render() {
    return (
      <div>
        <UserClass />
      </div>
    );
  }
}

export default AboutUs;
