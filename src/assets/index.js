import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RockPaperScissorsGame from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <RockPaperScissorsGame />
  </React.StrictMode>
);
