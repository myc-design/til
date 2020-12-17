import React from 'react';
import {MdHome} from 'react-icons/md';

function HomeButton() {
  return (
    <>
      <span>
        <MdHome />
        <a href="/" class="animated">
          Home
        </a>
      </span>
    </>
  );
}
export default HomeButton;
