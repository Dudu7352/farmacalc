import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import pl from 'date-fns/locale/pl';

registerLocale('pl', pl);
setDefaultLocale('pl');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
