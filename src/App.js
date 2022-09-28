
import './App.css';
import './components/Counter/index.js'
import Counter from './components/Counter/index.js';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
