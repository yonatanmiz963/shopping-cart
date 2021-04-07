import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <AppHeader />
      <Switch>
        <Route component={ContactEditPage} path='/contact/edit/:id?' />
        <Route component={ContactDetailsPage} path='/contact/:id' />
        <Route component={StatisticPage} path='/statistic' />
        <Route component={ContactPage} path='/contact' />
        <Route component={HomePage} path='/' />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
