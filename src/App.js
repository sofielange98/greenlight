import React from 'react';
import './App.css';
import NavbarNav from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Team from './pages/team';
import Blogs from './pages/blogs';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <NavbarNav />
      <Routes>
      <Route path="/" exact element={<Home/>} />
        <Route path='/about'  exact element={<About/>} />
        <Route path='/team' exact component={<Team/>} />
        <Route path='/blogs' exact component={<Blogs/>} />
        <Route path='/contact-us' exact component={<Contact/>} />
      </Routes>
    </Router>
  );
}
  
export default App;
