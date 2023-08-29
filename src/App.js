import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions/counterActions";

const App = ({ count, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(App);
