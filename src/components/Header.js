import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ background: '#47e5c2' }}>
      <Link to="/" className="item">
        <i className="home icon" />
      </Link>
    </div>
  );
};

export default Header;
