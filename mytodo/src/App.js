import './App.css';
import AddTask from './components/AddTask/AddTask';
import Todos from './components/Todos/Todos';


function App() {
  return (
    <div className='App'>
      <h1>My Todo App</h1>
     <AddTask/>
     <Todos/>
    </div>
  );
}

export default App;
