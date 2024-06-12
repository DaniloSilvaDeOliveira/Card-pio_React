import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

}
  
  setInterval(tick, 1000);

const root = ReactDOM.createRoot(document.getElementById('root'));