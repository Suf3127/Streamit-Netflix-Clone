import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header}  from "./components/header/Header"
import { HomePages } from "./home/HomePages";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePages }/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
