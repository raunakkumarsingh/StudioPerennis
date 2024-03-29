import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import {createBrowserRouter, RouterProvider, Route,Routes, Link, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='app-container'>
      <Navbar />
      <div className='extra-margin'></div>
      </div>
      <Routes>
      <Route path="/" element={ <Home/> } />
      </Routes>
      
      
   </Router>
  );
}

export default App;
