import React from 'react';
import SocialButtons from './SocialButtonsContainer';
import WelcomeMessage from './Welcome';
import LoginForm from './LoginForm';
import Header from '../Layout/Header';

const LoginScreen: React.FC = () => {
  return (
    <div className="h-full md:w-full w-full p-12 justify-center w-full xl:w-5/12">
      <div>
        <Header />
        <WelcomeMessage />
        <SocialButtons />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;
