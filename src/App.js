import { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import Dashboard from "./Pages/DashboardPage/DashboardPage";
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Header />
              <Switch>
                <Route path="/" exact>
                  <HomePage /> 
                </Route>
                <Route path="/current" exact>
                  <Dashboard />
                </Route>
                <Route path="/about">
                  <LandingPage />
                </Route>
                <Route path="/register">
                  <SignUpPage />
                </Route>
                <Route path="/login">
                  <SignInPage />
                </Route>
              </Switch>
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
