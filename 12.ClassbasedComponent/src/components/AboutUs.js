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
            <UserClass name = "1st " location="Bharuch"  />

            {/* //! Part 5 hainv multiple  child and life cycle of component 1:30 */}
            <UserClass name = "2nd " location="Bharuch"  />
            <UserClass name = "3rd " location="Bharuch"  />
            <UserClass name = "4th  " location="Bharuch"  />
        </div>
    );
    }
}

//You can check the output of this in console the render phase and the commit phase




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
