import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} exact></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/movie-detail" component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
