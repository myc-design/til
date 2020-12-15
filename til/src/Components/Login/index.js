import React, {useState} from 'react';
import './LogIn.css';

const LogInForm = () => {
    //set state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //create error object
    const [emailError, setEmailError] = useState({});
    const [passwordError, setPasswordError] = useState({});

    const onSubmit = e => {
        e.preventDefault();
        const isValid = validateForm();
       // Once it has been validated, we now need to create user and insert into db and then reset form
       //  Check username and password matches username and password in db
        setEmail("");
        setPassword("");
    };

    const validateForm = () => {
        let emailError = {};
        let passwordError = {};
        let isValid = true;

        //requirement - make username unique
        //need to check if username is in database already

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
                        <legend>Log In To Your Account</legend>
                        <div class="choose">
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

                            <input
                                type="submit"
                                name="submit"
                                value="Log In"
                            />
                        </div>
                    </fieldset>
                </form>
            </div>
        </>
    );
};

export default LogInForm;