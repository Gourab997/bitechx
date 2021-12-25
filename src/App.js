import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageSecound from "./components/Pagesecound/PageSecound";
import PageThird from "./components/PageThird/PageThird";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/second'>
            <PageSecound></PageSecound>
          </Route>
          <Route path='/third'>
            <PageThird></PageThird>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
