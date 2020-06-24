import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todo from '../components/todo/Todo';
import Tracking from '../components/tracking/Tracking';
import style from './App.css';

export default class App extends Component {

  render() {

    return (
      <div className={style.normal}>
        {/* <Todo /> */}
        <Tracking />
      </div>
    );
  }
}
