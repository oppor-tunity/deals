// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const renderMethod = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

const render = (Component) => {
  renderMethod(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    root
  );
};

// Use createRoot when available (React 18+)
if (typeof ReactDOM.createRoot === 'function') {
  const rootElement = ReactDOM.createRoot(root);
  rootElement.render(<App />);
} else {
  // Fallback to previous render behavior (React 17)
  render(App);
}
