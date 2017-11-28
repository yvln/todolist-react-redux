import React from 'react';
import WithTodos from './containers/WithTodos';
import WithDisplay from './containers/WithDisplay';

import './App.css';

const App = () =>
  <div className="App">
    <WithTodos />
    <WithDisplay />
  </div>

export default App;