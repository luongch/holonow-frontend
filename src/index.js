import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Videos from './routes/Videos'
import About from './routes/About'
import Livestreams from './routes/Livestreams'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/live" element={<Livestreams />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={"Nothing here"}></Route>
        </Route>        
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
