
import './App.css';
import Home from './Home.js';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
