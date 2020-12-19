import React, {useState} from 'react';
import './SignIn.css';
import Button from '../../Components/Button';
import {Redirect} from 'react-router-dom';
import Scene from '../../Components/Scene';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('optional');
  const [userRegister, setUserRegister] = useState(false);

  //create error object
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const onSubmit = e => {
    e.preventDefault();

    // const isValid = validateForm();
    if (true) {
      return fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //form data being sent
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          profile: profile,
        }),
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setUserRegister(true);
        });

      setName('');
      setEmail('');
      setPassword('');
      setProfile('');
    }
  };

  const validateForm = () => {
    let nameError = {};
    let emailError = {};
    let passwordError = {};
    let isValid = true;

    //requirement - make username unique
    //need to check if username is in database already

    if (name.length < 3) {
      //placeholder
      nameError.name = 'Sorry that name has been taken!';
      isValid = false;
    }

    const emailCheck = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(emailCheck)) {
      emailError.invalid = 'Please enter a valid email';
      isValid = false;
    }

    //need better validation!
    if (password.length < 6) {
      passwordError.invalid =
        'Please enter at least 6 characters';
      isValid = false;
    }
    //update state of error variables
    setNameError(nameError);
    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;
  };

  if (userRegister) return <Redirect to="/welcome" />;
  else
    return (
      <>
        <div class="form-wrapper">
          <form onSubmit={onSubmit} noValidate>
            <fieldset>
              <legend>Join the Learning Community</legend>
              <div class="choose">
                <label>Create a Username</label>
                <input
                  class="input-field"
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
                {Object.keys(nameError).map(key => {
                  return (
                    <div style={{color: 'red'}}>
                      {nameError[key]}
                    </div>
                  );
                })}
                <label>Enter Your Email</label>
                <input
                  class="input-field"
                  id="email"
                  type="email"
                  name="email"
                  value={email.invalid}
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
                {Object.keys(emailError).map(key => {
                  return (
                    <div style={{color: 'red'}}>
                      {emailError[key]}
                    </div>
                  );
                })}
                <label>Enter A Password</label>
                <input
                  class="input-field"
                  id="password"
                  type="password"
                  name="password"
                  value={password.invalid}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                {Object.keys(passwordError).map(key => {
                  return (
                    <div style={{color: 'red'}}>
                      {passwordError[key]}
                    </div>
                  );
                })}

                <label>Write a User Profile</label>
                <textarea
                  maxLength="500"
                  id="profile"
                  class="input-field"
                  type="password"
                  name="password"
                  rows="20"
                  cols="50"
                  value={profile}
                  onChange={e => {
                    setProfile(e.target.value);
                  }}></textarea>
                <Button />
              </div>
            </fieldset>
          </form>
        </div>
      </>
    );
};

export default Form;
