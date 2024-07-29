import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Components/Send Message/Message';
import Navbar from './Components/Navbar/Navbar';
// import WorkList from './Components/MyWork/workList';
import ProjectDetails from './Components/MyWork/projectDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route exact path="/message" element={<Message />}/>
        <Route exact path="/mywork" element={<ProjectDetails />}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
