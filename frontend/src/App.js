
import './App.css';
import { UseReducerCounter } from './Components/Counter/UseReducerCounter';
import { UseStateCounter } from './Components/Counter/UseStateCounter';

function App() {
  return (
    <div className="App">
     <UseStateCounter />
     <UseReducerCounter />
    </div>
  );
}

export default App;
