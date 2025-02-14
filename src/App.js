
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './component/navbar/Navbar';
import Home from './component/layout/Home';
import AboutUs from './component/layout/AboutUs.js';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
