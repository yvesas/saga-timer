import React, {Component} from 'react';
import { connect } from 'react-redux'
import { start, reset, stop} from './action'
import { getFormattedTime, getStatus } from './reducer'
import './App.css';

class Timer extends Component {
  state={
    status: 'Stopped',
    seconds: '00:00'
  }

  componentWillReceiveProps(props) {
    this.setState(
      {
        status: props.status,
        seconds: getFormattedTime(props)
        
      }
    )
  }

  render () {
    const {status, seconds} = this.state
    return (
      <div>        
        <p>
          {`Time: ${seconds} (${status})`}
        </p>
        <button
          disabled={status === 'Running'}
          onClick={() => this.props.dispatch(reset())}>
          Reset
        </button>
        <button
          disabled={status === 'Running'}
          onClick={() => this.props.dispatch(start())}>
          Start
        </button>
        <button
          disabled={status === 'Stopped'}
          onClick={() => this.props.dispatch(stop())}>
          Stop
        </button>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    status: store.status,
    seconds: store.seconds
  }
};

export default  connect((mapStateToProps)) (Timer);