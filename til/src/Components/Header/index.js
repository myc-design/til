import React from 'react';
import {MdHome} from 'react-icons/md';
import {FaRegHandPaper} from 'react-icons/fa';

import './Header.css';

function Header() {
  return (
    <>
      <nav>
        <span>
          <MdHome />
          <a href="/">Home</a>
        </span>
        <span>
          <MdHome />
          <a href="/">Sign Up</a>
        </span>
        <span>
          <MdHome />
          <a href="/">Log In</a>
        </span>
        <span>
          <FaRegHandPaper />
          <a href="/signup">Welcome!</a>
        </span>
      </nav>

      <h1>Today I Learned!</h1>
    </>
  );
}

export default Header;
