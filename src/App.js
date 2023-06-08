import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useAsyncError } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<LogIn />}/>
          <Route path="/configuracion" element={<Settings />}/>
        </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
