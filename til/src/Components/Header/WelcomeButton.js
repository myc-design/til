import React from 'react';
import {FaRegHandPaper} from 'react-icons/fa';

function WelcomeButton() {
  return (
    <>
      <span>
        <FaRegHandPaper />
        <a href="/signup" class="animated">
          Welcome!
        </a>
      </span>
    </>
  );
}
export default WelcomeButton;
