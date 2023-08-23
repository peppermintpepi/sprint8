import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/';
import { AppLogo, InputData, MainContainer, LoginBgn, InfoText, InfoAdditionalText, LoginButton, CloseButton, ErrorText, WelcomeText } from './LoginStyles';

// Exercici 6 --> pàgina de Login
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
          setLoggedIn(true);
        }
      }, []);
    
      const handleLogin = () => {
        const savedUserName = localStorage.getItem('userName');
        const savedPassword = localStorage.getItem('password');

        if (userName === savedUserName && password === savedPassword) {
          localStorage.setItem('isLoggedIn', 'true');
          setLoggedIn(true);
          setLoginError(false);
          console.log("You're logged in!");
        } else {
          setLoggedIn(false);
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
          {loggedIn ? (
            <div>
              <WelcomeText>Welcome, {userName}!</WelcomeText>
            </div>
          ) : (
            <div>
                <h2>Enter your email</h2>
                <InfoText>Log into your Star Wars account. 
                    If you don't have one, you will be prompted to create one.</InfoText>
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
              <h4>Star Wars is part of The Walt Disney Family of Companies.</h4>
              <InfoAdditionalText>
                This email and password lets you seamlessly log into services and experiences across 
                The Walt Disney Family of Companies, 
                such as ESPN, Walt Disney World, Marvel, and more.</InfoAdditionalText>
            </div>
          )}
          </MainContainer>
          </LoginBgn>
        </div>
      );
}

export default Login;
