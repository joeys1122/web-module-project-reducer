import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers';
import { addOne, applyNumber, changeOperation, clearDisplay, setMemory, applyMemory, clearMemory } from '../actions';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApplyNum = number => {
    dispatch(applyNumber(number));
  }

  const handleChangeOp = operator => {
    dispatch(changeOperation(operator));
  }

  const handleClear = () => {
    dispatch(clearDisplay());
  }

  const handleSetMemory = () => {
    dispatch(setMemory());
  }

  const handleApplyMem = number => {
    dispatch(applyMemory(number));
  }

  const handleClearMem = () => {
    dispatch(clearMemory());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleSetMemory}/>
              <CalcButton value={"MR"} onClick={() => handleApplyMem(state.memory)}/>
              <CalcButton value={"MC"} onClick={handleClearMem}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleApplyNum(1)}/>
              <CalcButton value={2} onClick={() => handleApplyNum(2)}/>
              <CalcButton value={3} onClick={() => handleApplyNum(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleApplyNum(4)}/>
              <CalcButton value={5} onClick={() => handleApplyNum(5)}/>
              <CalcButton value={6} onClick={() => handleApplyNum(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleApplyNum(7)}/>
              <CalcButton value={8} onClick={() => handleApplyNum(8)}/>
              <CalcButton value={9} onClick={() => handleApplyNum(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleChangeOp("+")}/>
              <CalcButton value={"*"} onClick={() => handleChangeOp("*")}/>
              <CalcButton value={"-"} onClick={() => handleChangeOp("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
