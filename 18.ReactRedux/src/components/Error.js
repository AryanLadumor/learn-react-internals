import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops!!!</h1>
      <h2>Something Went Wrong </h2>
      <div>
        <h1>Status : {err.status} </h1>
      </div>
      <div>
        <h1>Status Text : {err.statusText} </h1>
      </div>
      <div>
        <h1>Actual {err.data}</h1>
      </div>
      <div></div>
    </div>
  );
};

export default Error;
