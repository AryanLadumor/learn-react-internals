// let creat hook to see if user has internet or  not 

import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{  //no arg needed

    const [onlineStatus , setOnlineStatus]  = useState(true);

    //it should be done once
    useEffect(()=>{
        //event listneer to check if the user is offline?
        window.addEventListener("offline" , (e)=>{
            setOnlineStatus(false)
        })
        //event listneer to check if the user is online?
        window.addEventListener("online" , (e)=>{
            setOnlineStatus(true)
        })
    } , [])

    return onlineStatus //returning boolean 
}


export default useOnlineStatus;