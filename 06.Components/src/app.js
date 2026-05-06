import React from "react";
import ReactDOM from "react-dom/client";

// This is a React Element (A variable holding JSX)
const reactElement = <h1 id="heading">Hello World By JSX</h1>;

// This is a React Component (A function returning JSX)
const ReactComponent = () => {
  return <h1>I am a React Component</h1>;
};


//------------------------------------------------------
//React Nested Component
const Title = () => (
  <h1 className="head">React Component</h1>
);

const NestedComponent = () => (
  <div className="container">
    <Title /> {/* This is nested Component  */}
    <h2>Heart Of React</h2>
    
  </div>
);
//-----------------------------------------------------
//Elements inside Component
const titleElement = <span>JSX Made Life Easy!</span>;
const ElemInComp = () => (
  <div className="container">
    {titleElement} {/* Injecting Element */}
  </div>
);

//------------------------------------------------------
//Elements inside Elements
const e = <span>Child Element</span>;
const elemInElem = <h3>Parent Element: {e}</h3>;

//----------------------------------------------
//Components inside Elements
const compInElement = (
  <div>
    <Title />
  </div>
);



const root = ReactDOM.createRoot(document.querySelector("#root"));

//this is how we render Component,its not same as we render jsx
root.render(<ReactComponent />);

//you can also check those
// root.render(<NestedComponent/>)
// root.render(<ElemInComp/>)
// root.render(elemInElem)
// root.render(compInElement)


