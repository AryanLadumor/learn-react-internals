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
        <h1>About </h1>
        <h2> this is about Page</h2>
        <User></User>
        {/* <UserClass name="1st " location="Bharuch" /> */}
      </div>
    );
  }
}

export default AboutUs;
