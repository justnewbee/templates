import {
  StrictMode
} from 'react';
import {
  createRoot
} from 'react-dom/client';

import {
  getAppRoot
} from './util';
import App from './app';

import 'modern-normalize/modern-normalize.css';

import './index.css';

createRoot(getAppRoot()).render(<StrictMode>
  <App />
</StrictMode>);
