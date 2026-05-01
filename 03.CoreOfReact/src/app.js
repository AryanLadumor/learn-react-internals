/**
 * creating Complex Struture
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I Am Heading1<h1>
 *          <h2>I Am Heading2<h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I Am Heading1<h1>
 *          <h2>I Am Heading2<h2>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [          //Child Of parent
    React.createElement("h1", {}, "I am Heading1"),
    React.createElement("h2", {}, "I am Heading2"),  // child of child siblings heading
  ]), //  child of child siblings heading

  React.createElement("div", { id: "child2" }, [           //Child Of parent
    
    React.createElement("h1", {}, "I am Heading1"),
    React.createElement("h2", {}, "I am Heading2"), // child of child siblings heading
  ]),
]); 

console.log(parent);

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//so parent is a Object Which Is React Element and gets Converted into HTMl When rendered
