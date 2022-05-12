import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={LandingPage} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
