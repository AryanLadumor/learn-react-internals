import {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext"

const Grocery = lazy(()=>import("./components/Grocery"))

const AboutUs = lazy(()=>import("./components/AboutUs"))

const AppLayout = () => {

  const [userName , setUserName] = useState(null)

  useEffect(()=>{
    //aasume we have fetch auth api to get user data and we try to set this in context so it can be globblay accesible
    const data = {
      name : "Aryan"
    }
    setUserName(data.name)
  },[])





  return (
    <UserContext.Provider value={{loggedInUser:userName , setUserName}}> {/* //! here the value of looggedIn user will be changed to Aryan in Whole app */}

    <div className="app">
      <Header />
      <Outlet />
    </div>

    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1 className="text-2xl"> loading... </h1>} ><AboutUs /></Suspense> ,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path : "/restaurents/:resId" ,
        element : <RestaurentMenu/>
      },
      {
        path : "/grocery",
        element :  <Suspense fallback={<h1 className="text-2xl"  >Grocery loading </h1>}> <Grocery/> </Suspense> 
      }
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
