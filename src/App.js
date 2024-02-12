import React from 'react';
import './App.css';
import Header from './componetns/Header/Header';
import Navbar from './componetns/NavBar/NavBar';
import Profile from "./componetns/Profile/Profile";
import Footer from "./componetns/Footer/Footer";
import Dialogs from "./componetns/Dialogs/Dialogs";
import News from './componetns/News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DialogsContainer from './componetns/Dialogs/DialogsContainer/DialogsContainer';
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
            <Route path="/profile" element={<Profile posts={props.state.profilePage.posts} dispatch={props.dispatch} />} />
            <Route path="/news" Component={News} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>)
}

export default App;

