import logo from './logo.svg';
import React from 'react';
import {add, subtract, multiply, divide} from './math';
import './App.css';

function App() {
  const num1 = 10;
  const num2 = 5;
  return (
    <div className="App">
      <h1>Simple Math Operations</h1>
      <p>add: {add(num1, num2)}</p>
      <p>subtract: {subtract(num1, num2)}</p>
      <p>multiply: {multiply(num1, num2)}</p>
      <p>divide: {divide(num1, num2)}</p>
    </div>
  );
}

export default App;
