import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AppLogo, SignUpBgn, MainContainer, InputData, InfoText, InfoAdditionalText, LoginButton, CloseButton, ErrorText } from './SignUpStyles';
 

// Exercici 6 --> crear l'apartat de donar d'alta un nou usuari
const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [signedUp, setSignedUp] = useState(false);

    // Controlar si tots els camps s'han omplert correctament
    const [userNameError, setUserNameError] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const mailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const existingUserName = localStorage.getItem('userName');
    const existingMail = localStorage.getItem('mail');

    const history = useHistory();
    
    const handleSignUp = () => {

        if (!userName) {
            setUserNameError(true);
        } else {
            setUserNameError(false);
        }
        if (!firstName) {
            setFirstNameError(true);
        } else {
            setFirstNameError(false);
        }
        if (!lastName) {
            setLastNameError(true);
        } else {
            setLastNameError(false);
        }
        if (!mail || !mailPattern.test(mail)) {
            setMailError(true);
        } else {
            setMailError(false);
        }
        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        if (userName && mailPattern.test(mail) && firstName && lastName && password) {
            localStorage.setItem('signedUp', 'true');
            localStorage.setItem('userName', userName);  // Guarda les dades aquí
            localStorage.setItem('mail', mail);  // Guarda les dades aquí
            localStorage.setItem('firstName', firstName);  // Guarda les dades aquí
            localStorage.setItem('lastName', lastName);  // Guarda les dades aquí
            localStorage.setItem('password', password);  // Guarda les dades aquí
            setSignedUp(true);
            console.log('User signed up successfully');

            history.push('/ships');
        } else {
            console.log('Please, fill in all the fields');
        }
    }

    useEffect(() => {
        const isSignedUp = localStorage.getItem('signedUp');
        if (isSignedUp === 'true') {
          const savedUserName = localStorage.getItem('userName');
          const savedMail = localStorage.getItem('mail');
          const savedFirstName = localStorage.getItem('firstName');
          const savedLastName = localStorage.getItem('lastName');
          const savedPassword = localStorage.getItem('password');
    
          console.log('User data:', {
            userName: savedUserName,
            mail: savedMail,
            firstName: savedFirstName,
            lastName: savedLastName,
            password: savedPassword,
          });
        }
      }, []);

    return (
        <div>
          <SignUpBgn>
            <AppLogo />
            <MainContainer>
                <div>
                  <h3>Create a new account</h3>
                  <InfoText>Enter your information to create a new account.</InfoText>
                  <p>
                    <InputData
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        hasError={userNameError}
                    />
                    {userNameError && <ErrorText>Fill in</ErrorText>}
                    {existingUserName === userName && <ErrorText>Already registered user</ErrorText>}
                    </p>
                    <p>
                    <InputData
                        type="email"
                        placeholder="Email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        hasError={mailError}
                    />
                    {mailError && !mailPattern.test(mail) && <ErrorText>Wrong format. Please enter a valid mail</ErrorText>}
                    {mailError && mailPattern.test(mail) && <ErrorText>Fill in</ErrorText>}
                    {existingMail === mail && <ErrorText>Already registered mail</ErrorText>}
                    </p>
                    <p>
                    <InputData
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        hasError={firstNameError}
                    />
                    {firstNameError && <ErrorText>Fill in</ErrorText>}
                    </p>
                    <p>
                    <InputData
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        hasError={lastNameError}
                    />
                    {lastNameError && <ErrorText>Fill in</ErrorText>}
                    </p>
                    <p>
                    <InputData
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        hasError={passwordError}
                    />
                    {passwordError && <ErrorText>Fill in</ErrorText>}
                    </p>
                  <LoginButton onClick={handleSignUp}>Sign Up</LoginButton>
                  <InfoAdditionalText>
                    Your account information will be stored securely.
                  </InfoAdditionalText>
                  <Link to="/ships">
                    <CloseButton>x</CloseButton>
                  </Link>
                </div>
            </MainContainer>
          </SignUpBgn>
        </div>
      );
}

export default SignUp;
