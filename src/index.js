import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { HeaderProvider } from './context/header-dropdown.context';
import { LegalWarningProvider } from './context/legal-warning.context';
import { BurgerMenuProvider } from './context/burger-menu.context';
import { DataToSendProvider } from './context/data-to-send.context';
import { FilteredDataProvider } from './context/filtered-data.context';


import './normalize.css';
import './reset.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        <BurgerMenuProvider>
          <LegalWarningProvider>
            <DataToSendProvider>
              <FilteredDataProvider>
                <App />
              </FilteredDataProvider>
            </DataToSendProvider>
          </LegalWarningProvider>
        </BurgerMenuProvider>
      </HeaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
