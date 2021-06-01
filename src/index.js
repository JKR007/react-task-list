import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './functionBased/App.css';

import TasklistContainer from './functionBased/components/TasklistContainer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TasklistContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
