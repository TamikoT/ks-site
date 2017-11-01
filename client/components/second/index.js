import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { IndexLink } from 'react-router';
import { second, todo } from './styles';
import { example, p, link } from '../homepage/styles';
import { setConfig } from '../../actions';

class Second extends Component {

  /*eslint-disable */
  static onEnter({store, nextState, replaceState, callback}) {
    fetch('/api/v1/conf').then((r) => {
      return r.json();
    }).then((conf) => {
      store.dispatch(setConfig(conf));
      console.log('Faked connection latency! Please, take a look ---> `server/api.go:22`');
      callback();
    });
  }
  /*eslint-enable */

  render() {
    return <div className={second}>
      <Helmet title='Second' />
      <h2 className={example}>Second:</h2>
      <p> second page </p>
      <IndexLink to='/' className={link}>home</IndexLink>
    </div>;
  }

}

export default connect(store => ({ config: store.config }))(Second);
