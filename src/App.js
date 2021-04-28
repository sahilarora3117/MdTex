import './App.css';
import Welcome from './Components/Welcome/Welcome'
localStorage.setItem("filetoshow", "");
function App() {
  return (

    <div className="App">
      <Welcome className="App-header"/>
    </div>
  );
}

export default App;
