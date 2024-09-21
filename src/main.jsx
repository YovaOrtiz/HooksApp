import React from 'react';
import  ReactDOM from 'react-dom/client';
//import { CounterApp } from './01-useState/CounterApp';
//import { HooksApp } from './HooksApp';
import { CounterWithCustmoHook } from './01-useState/CounterWithCustmoHook';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustmoHook/>
  </React.StrictMode>
)
