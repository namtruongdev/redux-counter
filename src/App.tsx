import React from 'react';
import { connect, useSelector } from 'react-redux';
import './App.css';
import { DECREMENT, INCREMENT } from './constants/count';
import { AppState } from './reducers';

const mapStateToProps = (state: any) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
  };
};

function App(props: any) {
  console.log(props);
  const { count } = useSelector((state: AppState) => state.count);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={props.increment}>INCREMENT</button>
      <button onClick={props.decrement}>DECREMENT</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
