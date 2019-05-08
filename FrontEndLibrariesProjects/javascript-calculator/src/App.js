import React from 'react';
//import logo from './logo.svg';
import './App.css';
import CalcButton from './components/calc_button';
import CalcOperation from './components/calc_operation';
import CalcDisplay from './components/calc_display';

function App() {
  return (
    <div className="App">
      <CalcButton id={"nine"} calcNumber={9}></CalcButton>
      <CalcButton id={"eight"} calcNumber={8}></CalcButton>
      <CalcButton id={"seven"} calcNumber={7}></CalcButton>
      <CalcButton id={"six"} calcNumber={6}></CalcButton>
      <CalcButton id={"five"} calcNumber={5}></CalcButton>
      <CalcButton id={"four"} calcNumber={4}></CalcButton>
      <CalcButton id={"three"} calcNumber={3}></CalcButton>
      <CalcButton id={"two"} calcNumber={2}></CalcButton>
      <CalcButton id={"one"} calcNumber={1}></CalcButton>
      <CalcButton id={"zero"} calcNumber={0}></CalcButton>
      <CalcOperation id={"add"} calcOp={'+'}></CalcOperation>
      <CalcOperation id={"subtract"} calcOp={'-'}></CalcOperation>
      <CalcOperation id={"divide"} calcOp={'/'}></CalcOperation>
      <CalcOperation id={"multiply"} calcOp={'*'}></CalcOperation>
      <CalcOperation id={"equals"} calcOp={'='}></CalcOperation>
      <CalcDisplay id={"display"}></CalcDisplay>
    </div>
  );
}

export default App;
