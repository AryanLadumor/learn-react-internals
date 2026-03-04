import React from "react";
import { DUMMY_USER_PHOTTO } from "../utils/constants";
//! part-1  let get rid of everyting counts , console etc i.e cleaning the code 

class UserClass extends React.Component {


  
  constructor(props) {
    super(props);
    
    //! part 6.1 making state variable for useInfo
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url :  DUMMY_USER_PHOTTO
      },
    };
  }

// ! part6.1 making api call
// first make the funtion async as we wnt to fetch data from github api
async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/AryanLadumor");
      const jsondata = await data.json();

      console.log("Fetched Data:", jsondata);

      this.setState({
        userInfo: jsondata,
      });
      console.log("dasd" ,this.state.userInfo)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //? there is also an funtion which is called after update phase
  componentDidUpdate(){
     console.log("Component updated")
  }

  componentWillUnmount(){
    console.log("unmouted Compoennt")
  }
  

  render() {
    const {name,location,avatar_url} = this.state.userInfo
    
    return (
      <div className="user-card">
        <img  src={avatar_url}  alt="no image "></img>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : Aryan@gmail.com</h2>
      </div>
    );  }
}


export default UserClass; 