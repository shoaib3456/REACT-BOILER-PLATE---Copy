import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Header from './Components/Elements/Header';
import Footer from './Components/Elements/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route >
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
