// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContainer from './containers/HomePageContainer';
import CategoryPageContainer from './containers/CategoryPageContainer';
import UserDashboardContainer from './containers/UserDashboardContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePageContainer} />
          <Route path="/category/:category" component={CategoryPageContainer} />
          {/* Add more routes as needed */}
          <Route path="/user/:userId" component={UserDashboardContainer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
