import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from './redux/action';

class Counter extends Component {

    increment = () =>{
        this.props.increment()
    }
    decrement = () =>{
        this.props.decrement()
    }

    reset = () =>{
        this.props.reset()
    }
    render() {
        return (
            <div>
               {this.props.counter}
               <button onClick={this.increment}>Increment</button>
               <button onClick={this.decrement}>Decrement</button>
               <button onClick={this.reset}>Reset</button>

            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        counter:state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);