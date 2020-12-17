import React from 'react';
import {MdHome} from 'react-icons/md';

function SignUpButton() {
  return (
    <>
      <span>
        <MdHome />
        <a href="/" class="animated">
          Sign Up
        </a>
      </span>
    </>
  );
}
export default SignUpButton;
