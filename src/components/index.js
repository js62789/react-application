import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Types } from '../actions';
import styles from '../styles/main.css';

class Application extends React.Component {
  static propTypes = {
    isHealthy: PropTypes.bool
  }

  static defaultProps = {
    isHealthy: false
  }

  componentWillMount() {
    this.fetchHealth();
  }

  async fetchHealth() {
    this.props.dispatch({
      type: Types.HEALTH_REQUEST
    });
    try {
      const response = await fetch('/health');
      const body = await response.json();
      this.props.dispatch({
        type: Types.HEALTH_SUCCESS,
        payload: body
      });
    } catch (e) {
      this.props.dispatch({
        type: Types.HEALTH_FAILURE
      });
    }
  }

  render() {
    const { isHealthy } = this.props;

    return (
      <center className={styles.healthStatus}>
        <h1>React Application</h1>
        <h2>Your application is {!isHealthy && 'not'} healthy</h2>
      </center>
    );
  }
}

const mapStateToProps = ({ health }) => health;

export default hot(module)(connect(mapStateToProps)(Application));
