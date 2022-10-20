import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App';
import Archive from './routes/Archive'
import About from './routes/About'
import Livestreams from './routes/Livestreams'
import Upcoming from './routes/Upcoming'
import Search from './routes/Search'
import Login from './routes/Login'
import Logout from './routes/Logout'
import SuccessfulRedirect from './routes/SuccesfulRedirect'
import Favorites from './routes/Favorites'
import Channels from './routes/Channels';
import Message from './components/Message'
import GlobalContext from './Context';
ReactDOM.render(
  <React.StrictMode>
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Navigate to="/live" />}></Route>
            <Route path="/live" element={<Livestreams />}></Route>
            <Route path="/upcoming" element={<Upcoming />}></Route>
            <Route path="/archive" element={<Archive />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/channels" element={<Channels />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/login/redirect" element={<SuccessfulRedirect />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="*" element={<div className='videoContainer'><Message message={"404 Page Not Found"} gif={"error"}/></div>}></Route>
          </Route>        
        </Routes>
      </BrowserRouter>  
    </GlobalContext>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
