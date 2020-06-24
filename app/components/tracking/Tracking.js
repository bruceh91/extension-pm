import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Button } from 'semantic-ui-react'
import * as trackingActions from './services/trackingActions';

@connect(
  state => ({
    tracking: state.tracking
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
    this.props.actions.getTracking()
  }

  render() {

    return (
      <div>
        {/* <Button>test</Button> */}
        <p>Current tab: { this.props.tracking[0].text}</p>
      </div>
    );
  }
}