import React, { useCallback, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Cube from './Cube';
import DrawLine from './DrawLine';
import Text from './Text';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/cube">Cube</Link>
          {' | '}
          <Link to="/draw-line">DrawLine</Link>
          {' | '}
          <Link to="/text">Text</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/cube">
          <Cube />
        </Route>
        <Route path="/draw-line">
          <DrawLine />
        </Route>
        <Route path="/text">
          <Text />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
