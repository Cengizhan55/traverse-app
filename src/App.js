import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Tpage from "./T";
import MapPage from "./components/MapPage";
import News from "./components/News/News";
import Header from "./components/Header/Header";
import BusCard from "./components/BusCard/BusCard";
import TravelGuide from "./components/TravelGuide/TravelGuide";
import Navbar from "./navbar";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/map">
            <MapPage />
          </Route>

          <Route exact path="/news">
            <News/>
          </Route>
          <Route exact path="/busCard">
            <BusCard />
          </Route>
          <Route exact path="/travelGuide">
            <TravelGuide />
          </Route>

          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
