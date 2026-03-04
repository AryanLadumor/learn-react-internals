import { useEffect, useState } from "react"


const User = ({name,location}) =>{

        const [count1 , setCount1] = useState(0)
        const [count2 , setCount2] = useState(1)

       
        useEffect(()=>{
            console.log("hello")

            return ()=>{
                console.log("hello return ")
            }
        })

        console.log("render")
    return (

        <div className="user-card">
            <h1>count1 : {count1}</h1>
            <button onClick={()=>{setCount1(count1+1)}}>Inc Count </button> 
            <h2>Name : {name}</h2>
            <h2>Location : {location}</h2>
            <h2>Contact : Aryan@gmail.com</h2>
        </div>
    )
}

export default User