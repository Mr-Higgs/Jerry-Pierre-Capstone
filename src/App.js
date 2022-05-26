import { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Header from './Components/Header/Header';
import SuccessPage from './Pages/SuccessPage/SuccessPage';
import FailurePage from './Pages/FailurePage/FailurePage';

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
                  <DashboardPage/> 
                </Route>
                <Route path="/current/:title" component={DashboardPage} />
                <Route path="/about">
                  <LandingPage />
                </Route>
                <Route path="/register">
                  <SignUpPage />
                </Route>
                <Route path="/login">
                  <SignInPage />
                </Route>
                <Route path="/fail">
                  <FailurePage />
                </Route>
                <Route path="/success">
                  <SuccessPage />
                </Route>
              </Switch>
        </BrowserRouter>
       
      </div>
    );
  }
}

export default App;
