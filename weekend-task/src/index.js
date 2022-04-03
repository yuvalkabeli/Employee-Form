import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './App/store';
import { Provider } from 'react-redux';

// Connection between store and components
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


