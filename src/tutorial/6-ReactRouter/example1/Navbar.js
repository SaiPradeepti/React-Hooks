import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='routerNavbar'>
      <h1>navbar</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/people">People</Link>
        <Link to="/products">Products</Link>
        <Link to="/error">Error</Link>
      </div>
    </nav>
  )
};

export default Navbar;
