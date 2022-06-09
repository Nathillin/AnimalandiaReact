import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Gatos from './pages/gatos/Gatos';
import Error404 from './pages/error/Error404';
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/gatos' element={<Gatos/>}></Route>

    <Route path='*' element={<Error404 />}></Route>
    <Route path='/home' element={<Navigate replace to={"/"} />}></Route>
        </Routes>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);