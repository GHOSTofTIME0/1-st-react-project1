import React from 'react';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/NavBar/NavBar';
import Profile from "./componetns/Profile/Profile";
import Footer from "./componetns/Footer/Footer";
import DialogsContainer from './componetns/Dialogs/DialogsContainer/DialogsContainer';
import UsersContainer from './componetns/Users/UsersContainer';
import News from './componetns/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './componetns/Profile/ProfileContainer';
const App = (props) => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        <Navbar />
        {/* <Profile /> */}
        <div className='content'>
          <Routes>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/news" Component={News} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>)
}

export default App;

