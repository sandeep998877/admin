import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import bootstrap from 'bootstrap'

import './App.css'

import Dashboard from './Components/Dashboard';


function App() {
  return (
      <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}></Route>
        
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
