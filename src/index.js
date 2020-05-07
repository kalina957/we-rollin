import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// serviceWorker.register();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('./serviceWorker.js')
  .catch(function(err) {
  console.error(err);
  });
}
