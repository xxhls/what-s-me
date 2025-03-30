import 'reset-css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initVChartSemiTheme } from '@visactor/vchart-semi-theme';

initVChartSemiTheme();

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
