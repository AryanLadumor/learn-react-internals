import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
//! part-4 creating/cofiguration of our store
const appStore = configureStore({
    //this is big whole reducer is responsible to modified the appstore 
    //for eachslice we have different reducer
    reducer : {
        cart : cartReducer,
        //here we will put all other reducer for different slices eg
        //user : userReducer,
    }
});


export default appStore