import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
      <React.StrictMode>
            <Provider store={store}>
                  <ThemeProvider theme={theme}>
                        <App />
                  </ThemeProvider>
            </Provider>
      </React.StrictMode>
);
