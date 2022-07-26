import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/app/App';
import './style/style.scss';
import { createRoot } from 'react-dom/client';



const container = document.getElementById('root');

const root = createRoot(container); 
root.render(<App />);