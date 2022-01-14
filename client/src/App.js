import logo from './logo.svg';
import './App.css';
import Recipe from './components/recipe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Ricotta Cheescake Recipe 
        </h1> 
        <Recipe />
      </header>
    </div>
  );
}

export default App;
