import React from 'react';
import './App.css';
import Navbar from './componetns/NavBar/NavBar';
import Footer from "./componetns/Footer/Footer";
import DialogsContainer from './componetns/Dialogs/DialogsContainer/DialogsContainer';
import UsersContainer from './componetns/Users/UsersContainer';
import News from './componetns/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './componetns/Profile/ProfileContainer';
import HeaderContainer from './componetns/Header/HeaderContainer';
const App = (props) => {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <HeaderContainer />
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

