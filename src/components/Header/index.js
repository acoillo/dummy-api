import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className='card'>
        <div>DUMMY API</div>
        <div className='search'>
          <input id='' name='' placeholder='' type='text' className='input is-rounded' />
          <i className="fas fa-search" style={{ position: 'relative', top: 12, left: -32 }} />
        </div>
        <div><i className="far fa-user"></i> User</div>
      </div>
        );
  }
}
export default Header;