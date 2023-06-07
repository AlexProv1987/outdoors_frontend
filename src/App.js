import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from "./Pages/HomePage";
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import Footer from './Components/Footer'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function App() {
  return(
  <React.StrictMode>
     <SearchBar />
      <Header />
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
  );
}

export default App;