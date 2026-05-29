import { useEffect, useState } from "react"

///! part 1.1 creating user Component to show in AboutUs Page 
const User = ({name,location}) =>{
        //! part-2 creating hooks in funtional based coponent
        const [count1 , setCount1] = useState(0)
        const [count2 , setCount2] = useState(1)

        //! part-4 we make use effect to make api call
        useEffect(()=>{
            //* because we 1st Load --> Render --> Api Call --> Render
        }  , [])//so samt thing we do in Component did mount 

    return (

        <div className="user-card">
            <h1>count1 : {count1}</h1>
            <h1>count2 : {count2}</h1>
            <h2>Name : {name}</h2>
            <h2>Location : {location}</h2>
            <h2>Contact : Aryan@gmail.com</h2>
        </div>
    )
}

export default User