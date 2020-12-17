import React from 'react';
import {MdHome} from 'react-icons/md';

function LogInButton() {
  return (
    <>
      <span>
        <MdHome />
        <a href="/" class="animated">
          Log In
        </a>
      </span>
    </>
  );
}
export default LogInButton;
