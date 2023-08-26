import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Import useHistory

import { AppLogo, InputData, MainContainer, LoginBgn, InfoText, InfoAdditionalText, LoginButton, CloseButton, ErrorText } from './LoginStyles';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const history = useHistory();

  const handleLogin = () => {
    const savedUserName = localStorage.getItem('userName');
    const savedPassword = localStorage.getItem('password');
  
    if (userName === savedUserName && password === savedPassword) {
      localStorage.setItem('isLoggedIn', 'true');
      setLoginError(false);
      console.log("You're logged in!");
  
      if (history) {
        console.log("Before redirection");
        history.push('/ships');
        setIsLoggedIn(true);
        console.log("After redirection");
      }
    } else {
      setLoginError(true);
      console.log("There was an error and you're not logged in.");
    }
  };
  

  return (
    <div>
      <LoginBgn>
        <AppLogo />
        <Link to='/ships'>
                <CloseButton>x</CloseButton>
        </Link>
        <MainContainer>
          <div>
            <h2>Enter your email</h2>
            <InfoText>
              Log into your Star Wars account. If you don't have one, you will be prompted to create one.
            </InfoText>
            <p>
              <InputData
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {loginError && <ErrorText>Incorrect information</ErrorText>}
            </p>
            <p>
              <InputData
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginError && <ErrorText>Incorrect information</ErrorText>}
            </p>
            <LoginButton onClick={handleLogin}>LOGIN</LoginButton>

            <InfoAdditionalText>
                If you don't have an account, you can register here.
              </InfoAdditionalText>
              <Link to='/signup'>
                <LoginButton>SIGN UP</LoginButton>
              </Link>

            <h4>Star Wars is part of The Walt Disney Family of Companies.</h4>
            <InfoAdditionalText>
              This email and password lets you seamlessly log into services and experiences across The Walt Disney
              Family of Companies, such as ESPN, Walt Disney World, Marvel, and more.
            </InfoAdditionalText>
          </div>
        </MainContainer>
      </LoginBgn>
    </div>
  );
};

export default Login;
