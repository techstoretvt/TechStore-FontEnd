import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


import store, { persistor } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App persistor={persistor} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
