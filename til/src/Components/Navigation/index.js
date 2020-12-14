import React from 'react';
import {MdFace} from 'react-icons/md';
import {MdInsertEmoticon} from 'react-icons/md';
import {MdSentimentVerySatisfied} from 'react-icons/md';
import './Navigation.css';
// import styled from 'styled-components';

// const NavFlex = styled.div`
//   display: flex;
//   border: 2px solid black;
//   height: 20px;
// `;

function NavigationBar() {
  return (
    <>
      <div className="nav-container">
        <h3>All My Learning</h3>
        <div className="icon">
          <MdFace />
          <a href="/post">Recent Post</a>
        </div>
        <div className="icon">
          <MdSentimentVerySatisfied />
          <a href="/post">All Posts</a>
        </div>
        <div className="icon">
          <MdInsertEmoticon />
          <a href="/followers">Followers</a>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
