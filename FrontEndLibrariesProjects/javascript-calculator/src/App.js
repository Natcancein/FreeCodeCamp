import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CalcButton from './components/calc_button';
import CalcOperation from './components/calc_operation';
import CalcDisplay from './components/calc_display';

function App() {
  return (
    <div className="App">
      <CalcButton calcNumber={9}></CalcButton>
      <CalcButton calcNumber={8}></CalcButton>
      <CalcButton calcNumber={7}></CalcButton>
      <CalcButton calcNumber={6}></CalcButton>
      <CalcButton calcNumber={5}></CalcButton>
      <CalcButton calcNumber={4}></CalcButton>
      <CalcButton calcNumber={3}></CalcButton>
      <CalcButton calcNumber={2}></CalcButton>
      <CalcButton calcNumber={1}></CalcButton>
      <CalcButton calcNumber={0}></CalcButton>
      <CalcOperation calcOp={'+'}></CalcOperation>
      <CalcOperation calcOp={'-'}></CalcOperation>
      <CalcOperation calcOp={'/'}></CalcOperation>
      <CalcOperation calcOp={'*'}></CalcOperation>
      <CalcOperation calcOp={'='}></CalcOperation>
      <CalcDisplay></CalcDisplay>
    </div>
  );
}

export default App;
