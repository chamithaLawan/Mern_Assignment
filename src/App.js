import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/About';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import Features from './pages/Features';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Pricing' element={<Pricing/>} />      
        <Route path='/Features' element={<Features/>} />  
      </Routes>
    </Router>
  );
}

export default App;