import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  Home  from './pages/Home';

import {  ContextProvider } from './context/context';
import {   useEffect, useState } from 'react';

import Header from './components/Header';
import Cart from './components/Cart';



function App() {




  return (
    <ContextProvider>
    <BrowserRouter> 
    <Cart />
    <Header />
    <Routes>
    <Route index element={<Home />} />
     <Route exact path="/" component={Home} /> 
    {/* <Route path="/about" component={About} /> */}

    </Routes>
    </BrowserRouter>
    </ContextProvider>
  
  );
}

export default App;
