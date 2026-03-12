import {lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
// import Grocery from "./components/Grocery";
//! part-4 since provider is bridge between redux and react so it is imported from react-redux
import {Provider} from "react-redux"
import appStore from "./utils/appstore";
import Cart from "./components/Cart"

const Grocery = lazy(()=>import("./components/Grocery"))
const AboutUs = lazy(()=>import("./components/AboutUs"))


const AppLayout = () => {
  return (
    // this is the provider of readux-react which acts as providing data that is  store in appstore and  is passed throught  prop here  
    <Provider store={appStore}> {/*this act as context.provider it can work for any smal pice also*/}
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
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
      },
      {
        path : "/cart",
        element : <Cart/>
      }
    ],
    errorElement: <Error/>,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
