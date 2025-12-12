import {
  StrictMode
} from 'react';
import {
  createRoot
} from 'react-dom/client';

import 'modern-normalize/modern-normalize.css';

import './index.css';

import {
  getAppRoot
} from './util';
import App from './app';

createRoot(getAppRoot()).render(<StrictMode>
  <App />
</StrictMode>);
