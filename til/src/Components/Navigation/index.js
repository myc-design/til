import React from 'react';
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
        <a href="/post">Post</a>
        <a href="/followers">Followers</a>
      </div>
    </>
  );
}

export default NavigationBar;
