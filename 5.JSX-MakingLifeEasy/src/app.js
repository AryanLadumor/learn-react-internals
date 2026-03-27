import React from "react";
import ReactDOM from "react-dom/client";

//creating react Element from core which is not developer friendly ,it reduce redabily
const heading = React.createElement("h1", { id: "heading" }, "Hello World ");
console.log("heading" ,heading);

// JSX => HTML-like or XML-like
//creating react element by jsx
const jsxheading = <h1 id="heading">Hello World By JSX</h1>; //this piece of code written is JSX
//here attributes are passed in camel case eg clasName , tabIndex which prove jsx is not html
console.log("JSXheading" , jsxheading); //this is same as heading JS object


//For Multiple Line of jsx we should wrap all things in simple brakets
const multilineJSX = (
  <div id="parent">
    <div id="child1">
      <h1>I Am Heading 1</h1>
      <h2>I Am Heading 2</h2>
    </div>
    <div id="child2">
      <h1>I Am Heading 1</h1>
      <h2>I Am Heading 2</h2>
    </div>
  </div>
);

//Adding Js in JSX
const number = 3000;
const JsInJsx = (
  <div>
    <h1>Here we can also add any JavaScript using curly braces:</h1>
    <h2>{number}</h2>
    {console.log("Hello! I am running inside JSX")}
    <p>Sum of 100 + 200 is: {100 + 200}</p>
    <h2>{"JSX is Amazing!"}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

//now instead of heading we will simply render jsxheading
root.render(jsxheading);

//comment the upper render if you want to render/uncomment this one
// root.render(multilineJSX);
// root.render(JsInJsx);


//from now on we will never be using react Element
