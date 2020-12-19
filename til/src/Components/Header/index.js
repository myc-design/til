import React from 'react';
import HomeButton from './HomeButton';
import SignUpButton from './SignUpButton';
import LogInButton from './LoginButton';
import WelcomeButton from './WelcomeButton';
import Form from '../../Components/SignIn';
import Login from '../../Components/Login';
import CardContainer from '../../Components/CardContainer';
import './Header.css';
import Scene from '../../Components/Scene';
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import LogInForm from '../Login';

function Header() {
  return (
    <>
  <Scene/>
      <Router>
        <nav>
          <Link to="/">
            <HomeButton />
          </Link>
          <Link to="/signup">
            <SignUpButton />
          </Link>
          <Link to="/login">
            <LogInButton />
          </Link>
          <Link to="/welcome">
            <WelcomeButton />
          </Link>
        </nav>
        <h1>Today I Learned!</h1>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/signup" component={Form} />
          <Route path="/login" component={Login} />
          <Route
            path="/welcome"
            component={CardContainer}
          />
        </Switch>
      </Router>
    </>
  );
}

export default Header;
