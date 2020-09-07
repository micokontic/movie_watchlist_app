import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Watched from "./components/Watched";
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Add from "./components/Add";
import { GlobalProvider, globalContext } from "./context/globalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Header />
          <switch>
            <Route path="/add" component={Add}></Route>
            <Route path="/watched" exact component={Watched}></Route>
            <Route path="/watchlist" exact component={Watchlist}></Route>
          </switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
