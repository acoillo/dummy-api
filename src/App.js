import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Public = lazy(() => import('./scenes/Public/Public'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={
        <div className="loading__container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      }>
        <Router>
          <Switch>
            <Route path='/' name='Public' component={Public} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
