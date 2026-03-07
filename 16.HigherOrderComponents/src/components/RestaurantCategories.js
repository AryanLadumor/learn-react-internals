import { useState } from "react"
import MenuItemList from "./MenuItemList"


const RestaurantCategories = ({data , showItems , setShowIndex}) =>{//part-3 now parent will have the control of this state (showItem)
    //! part-2 making our own accordian
    // const [showItems , setShowItems] = useState(false);

     const handleClick = () =>{
        // setShowItems(!showItems)
        setShowIndex()
    } //!part-3 now the control given to parent we no more need state here 


    return (
        <div className="text-center mx-auto shadow-lg rounded-lg  " >
            <div className="flex justify-between mt-10 p-4 cursor-pointer" onClick={handleClick} >
                <span className="font-bold  text-2xl">{data?.title}[{data?.itemCards?.length}]</span>
                <span  className=" font-extrabold" > {showItems ? "🔽":"▶️"}</span>
            </div>
            {/*
            //!part-2
             Here we created a one more component which will fetch all item of specific category  
             the item will only be show where the 'showItems' is true i.e. when user click accordian
             */}
            {showItems && <MenuItemList items={data?.itemCards} />}
        </div>
    )
}

export default RestaurantCategories