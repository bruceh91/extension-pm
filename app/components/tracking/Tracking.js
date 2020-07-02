import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Button } from 'semantic-ui-react'
import * as trackingActions from './services/trackingActions';

@connect(
  state => ({
    tracking: state.tracking[0]
  }),
  dispatch => ({
    actions: bindActionCreators(trackingActions, dispatch)
  })
)
export default class Tracking extends Component {

  static propTypes = {
    tracking: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log(`tracking -- ${JSON.stringify(this.props.tracking)}`)
    console.log(`blockedArray -- ${JSON.stringify(this.props.tracking.blockedArray)}`)
    this.props.actions.getTracking(this.props.tracking.blockedArray)
  }

  render() {

    return (
      <div>
        <div>
          <h3>Blocked List</h3>
          <ul>
            {this.props.tracking.blockedArray.map((site) => {
            return(
            <li>{site}</li>
            )
            })}
          </ul>
        </div>
        <p>Current tab: { this.props.tracking.text}</p>
      </div>
    );
  }
}