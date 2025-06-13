import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App.jsx';

import './i18n';
import 'primeicons/primeicons.css';
import 'normalize.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={'/mobile-store'}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
