import User from "./User";
import UserClass from "./UserClass"
import {Component } from "react"

class AboutUs extends Component{
    constructor(props){
        super(props)

        console.log("Parent Constructor called")
    }

    componentDidMount(){
        console.log("parent didMount called")
    }

    render(){
        console.log("parent render called")
        return (
        <div>
            <h1>About </h1>
            <h2> this is about Page</h2>
            {/* Pasing Props */}
            {/* <User  name = "Aryan (function)"  location="Bharuch"  /> */}
            <UserClass name = "First " location="Bharuch"  />
            <UserClass name = "Second " location="Bharuch"  />
        </div>
    );
    }
}



//! part-1.2
//now here we will actually implement this where it will composite class based componennt 
// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About </h1>
//             <h2> this is about Page</h2>
//             {/* Pasing Props */}
//             <User  name = "Aryan (function)"  location="Bharuch"  />
//             <UserClass name = "Aryan (class)" location="Bharuch"  />
//         </div>
//     );
// };

export default AboutUs;
