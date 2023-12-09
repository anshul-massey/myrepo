import { Component } from "react";  //we have to import the already defined component class from react module to get the functionality of a component in our class component

export class About extends Component{  //we have to extend a already present class component which is present inside react module


  render(){ // use the render function of the component class to render the component onto the web page
            //we don't have to call the render function , react will automatically detect that it is a render function and it will call it and we don't need to create object of the class component by ourself (Good thing about class component) all will be managed by react js only
      return(
      <div>
        <h1>Welcome to About Section</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur quisquam, incidunt repellat, numquam facere iusto sapiente laboriosam assumenda harum similique provident eum non deserunt. Minima est doloribus autem quis.</p>
      </div>
      
      )

    };

  }

