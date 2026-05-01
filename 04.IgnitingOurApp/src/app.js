import React from "react";
import ReactDOM from "react-dom/client";



const parent = React.createElement("div", { id: "parent", key: "k1" }, [
  React.createElement("div", { id: "child1", key: "k2" }, [
    React.createElement("h1", { key: "k4" }, "I am Heading 1"),
    React.createElement("h2", { key: "k5" }, "I am Heading 2"),
  ]),

  React.createElement("div", { id: "child2", key: "k3" }, [
    React.createElement("h1", { key: "k6" }, "I am Heading 1"),
    React.createElement("h2", { key: "k7" }, "I am Heading 2"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
//Intially when you run project using parcel it will give the time(ms or s) it Built in Eg "Built in xyz ms" but when you make changes then again run project then it will take much lower time < xyz

