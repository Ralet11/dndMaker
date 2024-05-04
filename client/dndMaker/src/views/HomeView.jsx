import React from 'react';
import LoginForm from '../components/LoginComponent';

const HomeView = () => {
  const backgroundImage = "https://i.pinimg.com/originals/49/a4/7f/49a47f4aa2bad945b9d4905dec88b69c.jpg";

  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

export default HomeView;
