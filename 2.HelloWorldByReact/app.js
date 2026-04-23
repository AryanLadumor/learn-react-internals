//-------------------------------------------Creating Simple Hello World By React 


// creating a Node of Virtual DOM A react Element 
const heading = React.createElement("h1" , {
    id: "heading",
    xyz: "abc",
  } , "Hello World")
//----This Is Javascript Object. just print  (heading) in Dev Tools For More Info
// ---The Last 2 arg is basically Prop


const root = ReactDOM.createRoot(document.getElementById("root"))
//Here We have Located the root Where we Will inject  React Element.we can select any element we want where we want to inject react

root.render(heading)
//Finally we have converted the JS Object into the HTML Format
//mean we have tranfered the things into Real DOM From Virtual DOM

