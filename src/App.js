import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Tpage from "./T";
import Navbar from './navbar';
import MapPage from './components/MapPage';
import News from './components/News/News';

const App = () => {
  return (
    <>
     <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/t'>
          <Tpage />
        </Route>

        <Route exact path='/map'>
          <MapPage />
        </Route>

        <Route exact path='/news'>
          <News />
        </Route>
      </Switch>
    </Router>
    </>
  );
};

export default App;
