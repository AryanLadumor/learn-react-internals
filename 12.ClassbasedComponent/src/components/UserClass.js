import React from "react";

//! part 1.3
//Now we are implemniting same User component but in Class baesd Form
//class based componet --> a normal js class

//this is similar to User.js
class UserClass extends React.Component {//extending this will make it class based component


  //this construtor will recive the props 

  constructor(props){
    //! parrt 1.3
    super(props) //TODO why we have to go for super()
    // console.log(props)
    
    //! part 2.1 creatin hoks
    //when we say rendeing a funtion commp if we call it it load on web page we are mounting that functin call,invoking that funtional compom  so invokinkng --> loading or m,outing on web page 
    //when we say loading class based we are creating instance  , so when we creating instane this constructir id called so this is the best place to recive props and best place to create state variable 
    //this.state is a big whole obj wghich contain All state variable this is how we defind sta var in CBC
    this.state = {
        count1 : 0, //initial val = 0
        count2 : 1 // defining 2nd statevariable
    }


  }

  
  
  
  render() {
    //in class based we have render method which return a piece fof jsx
    



    //! part -1.3
    const {location} = this.props;

    const {count1 , count2} = this.state;



    return (
      <div className="user-card">
        <h1>Count1 : {count1}</h1> {/* this is how we should use state var*/}
        <h1>Count2 : {count2}</h1> 
        <button onClick = {()=>{
        {/* //! part-3.1 updating State varable */}

        //  this.state.count1 = this.state.count1+1 //no This is Completeling wrong it will change var but not UI
         //? instead react provide us one funtion which we can use at any loc of class
         this.setState({
          count1 : this.state.count1+1 //this will only update the portion on this.state object and then find diff
         })


        }} >Increase Count</button>
        <h2>Name : {this.props.name}</h2> {/* this is how we use props up here  */ }
        <h2>Location : {location}</h2>
        <h2>Contact : Aryan@gmail.com</h2>
      </div>
    );  }
}


export default UserClass; 