// src/App.js
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
          <Route path="/" exact component={HomePageContainer} />
          <Route path="/category/:category" component={CategoryPageContainer} />
          <Route path="/user/:userId" component={UserDashboardContainer} />
          <Route path="/add-deal" component={DealFormPage} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
