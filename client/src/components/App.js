import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { GoogleOutlined } from '@ant-design/icons';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderUrl = () => {
    if (!this.props.auth) {
      return <a href="/auth/google">Sign in with Google</a>;
    } else {
      return <a href="/api/logout">Logout</a>;
    }
  };

  render() {
    return (
      <div className="App">
        <Button icon={<GoogleOutlined />} type="link" size={'large'}>
          {this.renderUrl()}
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
