import React from 'react';
import Parent from "./components/coms/Parent"
import{ connect }  from "react-redux";
import { increment, decrement } from "./actions/counter"

class App extends React.Component {
  render() {
    console.log('this.props',this.props);
    const { increment, decrement } = this.props;
    return (
      <div className="container">
        {/* <Parent /> */}
  <h1  className="jumbotron-heading text-center">{ this.props.counter }</h1>
        {/* <button onClick={ this.props.onIncrement } className="btn btn-primary">increment</button>
        <button onClick={ this.props.onDecrement }  className="btn btn-primary">decrement</button> */}
        <button onClick={ () => (increment()) } className="btn btn-primary">increment</button>
        <button onClick={ () => (decrement()) } className="btn btn-primary">decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => { dispatch(increment()) },
      decrement: () => { dispatch(decrement()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

