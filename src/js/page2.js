import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import github from '../assets/github.png';

class page2 extends Component {
  render() {
    return (
      <div>
        <h1>page 2</h1>
        <img src={github} />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default page2;
