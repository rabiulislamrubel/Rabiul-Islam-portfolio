import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/Home/About/About';
import Home from './components/Home/Home/Home';
import Projects from './components/Home/Projects/Projects';
import Contact from './components/Home/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/allProject'>
          <Projects />
        </Route>
        <Route path='/contactUs'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
