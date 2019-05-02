import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

// Components
import Counter from './Counter';

const App = () => (
  <div className="wrapper">
    <Counter />
  </div>
);

render(<App />, document.getElementById('root'));

