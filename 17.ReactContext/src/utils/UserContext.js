import { createContext } from "react";

//! part-1 this is where we will create our context 
const  UserContext = createContext({
    loggedInUser : "DefaultUser"   /*Initial value of the data*/
})

//this is how we can export this data to anywhere 
export default UserContext
//Now let excess this in header