import React, {useState} from 'react';
import './SignIn.css';

const Form = () => {
  //set state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //create error object
  const [nameError, setNameError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});

  const onSubmit = e => {
    e.preventDefault();
    const isValid = validateForm();
    // Once we have input name and password, create jwt token
    // Hash password using Bcrypt
    // Create a user based on user schema - username, email and hashed password keys and a time stamp (created at).
    // Connect to db - (create mongoose connection)
    // Insert into db using insert function
    // Send user to login page
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

    const emailCheck = new RegExp(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );

    if (email === emailCheck) {
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

  //handle submitted data
  //check data is validated first before inserting into db
  //pass the data to mongoose
  //create a user
  //insert into database

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
                id="profile"
                class="input-field"
                type="password"
                name="password"
                rows="20"
                cols="50"></textarea>
              <input
                type="submit"
                name="submit"
                value="Sign Up"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
