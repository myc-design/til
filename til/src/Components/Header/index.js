import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
      <nav>
        {/* <div class="home"> */}
        <a href="/">Home</a>
        {/* </div> */}
        {/* <div class="signup"> */}
        <a href="/signup">Welcome!</a>
        {/* </div> */}
      </nav>

      <h1>Today I Learned!</h1>
    </>
  );
}

export default Header;
