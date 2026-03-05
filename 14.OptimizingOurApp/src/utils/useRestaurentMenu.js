import { useEffect , useState } from "react";
import { restaurentMenus } from "./mockData"; 
//here we should create each hook in single file oonly 
//and strt theri name with use 


const useRestaurentMenu = (resId) =>{ //it takes resId
    const [resInfo , setResInfo] = useState(null);


    useEffect(()=>{
        fetchData()
    },[])

    function fetchData(){
        const data = restaurentMenus[resId]
        setResInfo(data )
    }


    return  resInfo; //it return res Info
}



export default useRestaurentMenu;