
                    // all the attributes wil be catched inside the function parameter
                    // we can name it as we like but generally it is named as props
export function Home(props){  //always create the function name same as file name , it reduces the developers efforts
//we are exporting this component to be used in another file 

//now we are free to use direct javascript variable we don't have to do DOM now internally it will do the innerHTML
return (
  <div>
    <h1>Welcome to Home</h1>
    <h1>{props.headerText}</h1>
    <p>{props.description}</p>
  </div>
);
}