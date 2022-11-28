import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Amplify, {amplify} from '@aws-amplify/core'
import config from './aws-exports';
import '@aws-amplify/ui/dist/style.css';

Amplify.configure(config)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

