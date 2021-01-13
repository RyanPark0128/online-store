import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Cognito } from './context/Cognito'


ReactDOM.render(
  <Cognito>
    <App />
  </Cognito>,
  document.getElementById('root')
);

