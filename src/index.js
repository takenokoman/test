import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App'
import Map from './pages/Map';
import User from './pages/User';
import Camera from './pages/Camera';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { library, faConfig } from '@fortawesome/fontawesome-svg-core'
import { fal } from '@fortawesome/pro-light-svg-icons'

library.add(fal)

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/map" element={<Map />} />
        <Route path="/user" element={<User />} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
