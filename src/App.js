import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { Cart } from './pages/Cart'
import { ShoppingApp } from './pages/ShoppingApp'

function App() {
  return (
    <Router>
    <div className="App">
      <AppHeader />
      <Switch>
        <Route component={Cart} path='/cart' />
        <Route component={ShoppingApp} path='/' />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
