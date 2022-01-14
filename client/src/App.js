import logo from './logo.svg';
import './App.css';
import Recipe from './components/recipe';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Recipe />
    </div>
  );
}

export default App;
