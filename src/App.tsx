import React, { useCallback, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Cube from './Cube';
import DrawLine from './DrawLine';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/cube">Cube</Link>
        </li>
        <li>
          <Link to="/draw-line">DrawLine</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/cube">
          <Cube />
        </Route>
        <Route path="/draw-line">
          <DrawLine />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
