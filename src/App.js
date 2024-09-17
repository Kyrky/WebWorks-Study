import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import PracticalWorks from './components/PracticalWorks';
import LabWorks from './components/LabWorks';
import LabWork1 from './pages/LabWork1'; // Импорт первой лабораторной работы
import './styles/Main.css'; // Подключение основного файла стилей

const App = () => {
  return (
    <Router>
      <div className="root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/practical-works" element={<PracticalWorks />} />
          <Route path="/lab-works" element={<LabWorks />} />
          <Route path="/lab1" element={<LabWork1 />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
