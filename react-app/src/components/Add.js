import React, { useState } from 'react';

export default function Add() {
  // Declare state variables to store the input values and the result
  const [number, setNumber] = useState("");
  const [number1, setNumber1] = useState("");
  const [result, setResult] = useState("");

  // Define a function to handle the addition and update the result state
  const addnumber=()=>{
    const num1=parseFloat(number);
    const num2=parseFloat(number1);
    const sum=num1+num2;
    setResult(sum);
  }
  return (
    <div>
      <h1>Adding Numbers</h1>
      <label htmlFor="number">Enter the first number:</label>
      <input



        type='number'
        id='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <label htmlFor="number1">Enter the second number:</label>
      <input
        type='number'
        id='number1'
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <br />
      <input id='result' type='text' value={result} readOnly />
      <br />
      <button onClick={addnumber}>Submit</button>
    </div>
  );
}
