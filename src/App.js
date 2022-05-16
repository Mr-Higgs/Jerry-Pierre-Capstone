import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/HomePage/HomePage';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={LandingPage} />
          <Route path="/register" component={SignUpPage} />
          <Route path="/login" component={SignInPage} />
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
