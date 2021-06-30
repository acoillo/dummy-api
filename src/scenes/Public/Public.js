import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';

class Public extends Component {
  render () {
    return <div>
      <Switch>
        <Route path='/' name='Home' component={ Home } />
      </Switch>
    </div>;
  }
}

export default Public;