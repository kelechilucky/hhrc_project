// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SermonsPage from './pages/SermonsPage';
import EventsPage from './pages/EventsPage';
import MinstriesPage from './pages/MinstriesPage';
import ConnectPage from './pages/ConnectPage';
import GivePage from './pages/GivePage';

// Import Shared Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app flex flex-col min-h-screen">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sermons" element={<SermonsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/ministries" element={<MinstriesPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/give" element={<GivePage />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;