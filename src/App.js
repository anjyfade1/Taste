import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Landing from './Container/Landing-Page/Landing';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Landing/>
      </div>
    </Router>
  );
}

export default App;
