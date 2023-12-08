import React from 'react';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/NavBar/NavBar';
import Profile from "./componetns/Profile/Profile";
import Footer from "./componetns/Footer/Footer";
import Dialogs from "./componetns/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile /> */}
      <div className='content'>
        <BrowserRouter>
          <Routes>
            <Route path="/Dialogs" Component={Dialogs} />
            <Route path="/Profile" Component={Profile} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>)
}

export default App;