// src/App.js (React Router v6)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContainer from './containers/HomePageContainer';
import CategoryPageContainer from './containers/CategoryPageContainer';
import UserDashboardContainer from './containers/UserDashboardContainer';
import DealFormPage from './components/DealFormPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePageContainer />} />
          <Route path="/category/:category" element={<CategoryPageContainer />} />
          <Route path="/user/:userId" element={<UserDashboardContainer />} />
          <Route path="/add-deal" element={<DealFormPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
