import React from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";
import './App.css';
import Article from './compo/Article';
import Food from './compo/Food';
import Fitness from './compo/Fitness';
import Hollywood from './compo/Hollywood';
import Bollywood from './compo/Bollywood';
import Technology from './compo/Technology';
import Home from './compo/Home';
import {ProvideData} from "./compo/ContextApi.js";
import './compo/index.css'
import Header from "./compo/Header.js"
import Footer from './compo/Footer';

function App() { 
  return (
    <Router>
      <ProvideData>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path="/article/:path" element={<Article />} />
      </Routes>
      <Footer />
      </ProvideData>
    </Router>    
  );
}

export default App;
