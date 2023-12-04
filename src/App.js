import React from 'react';
import './App.css';
import Header from './componetns/Header';
import Navbar from './componetns/NavBar';
import Profile from "./componetns/Profile";
import Footer from "./componetns/Footer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>);
}

export default App;