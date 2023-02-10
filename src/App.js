import './App.scss';
import { InputContainer } from './components/input-container/input-container.componet';
import { ListContainer } from './components/list-container/list-container.component';

const App = () => {
  return (
    <div className="App">
      <h1> “For every minute spent organizing, an hour is earned." </h1>
      <div className="container">
        <InputContainer/>
        <ListContainer/>
      </div> 
    </div>
  );
}

export default App; 
