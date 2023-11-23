// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContainer from './containers/HomePageContainer';
import CategoryPageContainer from './containers/CategoryPageContainer';
import UserDashboardContainer from './containers/UserDashboardContainer';
import DealFormPage from './components/DealFormPage';
import DealDetailsPage from './components/DealDetailsPage'; // Import the new component

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
          <Route path="/deal/:dealId" element={<DealDetailsPage />} /> {/* New route for DealDetailsPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
