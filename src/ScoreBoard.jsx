// import { Component } from "react";

import { useState } from "react"


// export class ScoreBoard extends Component{
//   constructor(){
//     super(); // exclusive to oops whenver you are having constructor of child class then you always have to call the constructor of the super class first because there is not compiler in JS we have to call it implicitly
//     this.state = {
//       score: 0,
//       x: "",
//       y:""
//     };

//   }

//   increaseScore=()=>{
//   this.setState({score:this.state.score+4});
//   }

//   decreaseScore=()=>{
//     this.setState({score:this.state.score-1});
//   }

//   render(){
//     return (
      
//       <div>
//         <h1>{this.state.score}</h1>
//         <input type="button" value='+' onClick={this.increaseScore}/>
//         <input type="button" value='-' onClick={this.decreaseScore}/>
//       </div>



//     )


//   }
// }


export function ScoreBoard(){
  const [score,setScore] = useState(0);
  const increaseScore=()=>{
    setScore(score+4);
  }
  const decreaseScore=()=>{
    setScore(score-1);
  }
  return (
    <div>
      <h1>{score}</h1>
      <input type="button" value='+' onClick={increaseScore}/>
      <input type="button" value='-' onClick={decreaseScore}/>
    </div>
  )
}