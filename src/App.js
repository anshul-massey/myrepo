import './App.css';  //always remove unused component
import { Home } from './Home'; // importing our component //it is been configured that the .jsx will automatically be considered as . jsx at runtime so that's why its not necessary to specify extension
import { About } from './About';
import { ScoreBoard } from './ScoreBoard';

function App() {
  return (
    <div>
            {/* we have to pass some data to the props so a component can't decide value of it's props
            the value of props will be fixed at the place where we are displaying the particular component*/}
    <Home headerText="This is props value" description="This is a dummy text"></Home>
            {/*This will become an object and will be passed into the function */}
            {/*there can be many attributes can be passed to the function component so we catch this arguments in the form of an object and that object name is props in function parameter*/}
    <ScoreBoard></ScoreBoard>
    <About></About>
    </div>
  );
}

export default App;
