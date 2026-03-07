
 
 import { useRouteError } from "react-router";

const Error = () =>{
    //using hook
    const err = useRouteError();
    console.log(err) // * the info about error
    return  (
        <div>
            {/* now we can show more info about route error */}
            <h1>Ooops!!!</h1>
            <h2>Something Went  Wrong </h2>
             <div>
                <h1>Status :  {err.status} </h1>
            </div>
            <div>
                <h1>Status Text :  {err.statusText} </h1>
            </div>
            <div>
                <h1>Actual  {err.data}</h1>  
            </div>
            <div>
               
            </div>
        </div>
    )
}

export default Error;