import React, { Component } from 'react';

import TextLink from './textLink';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Story Editor</h1>
        <TextLink to="/library" text="Library" />
      </div>
    );
  }
}

export default Home;