import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from "./Pages/HomePage";
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return(
  <React.StrictMode>
    <Router>
      <SearchBar />
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
  );
}

export default App;