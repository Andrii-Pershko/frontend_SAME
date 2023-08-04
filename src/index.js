import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename="frontend_SAME">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
