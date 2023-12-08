import React from 'react';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/NavBar/NavBar';
import Profile from "./componetns/Profile/Profile";
import Footer from "./componetns/Footer/Footer";

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