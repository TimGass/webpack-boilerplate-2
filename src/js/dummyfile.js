import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import github from '../assets/github.png';

class Dummy extends Component {
  render() {
    return (
      <div>
        <h1>Hello World from React boilerplate</h1>
        <img src={github} />
        <Link to="/page2">Page 2</Link>
      </div>
    );
  }
}

export default Dummy;
