import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import TopicDetails from './TopicDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/details">
              <TopicDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
