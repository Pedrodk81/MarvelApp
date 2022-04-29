import React from 'react';
import ReactDOM from 'react-dom/client';

import store from './store';
import { Provider } from 'react-redux'

import { DataProvider } from "./store/DataContext";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <DataProvider>
        <App />
      </DataProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
