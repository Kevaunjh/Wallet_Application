import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bnwLogo from './images/bnwbanx.png';
import './index.css'; // Import the CSS file for the animation

const LogoAnimation = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000); // Delay of 1 second before starting the animation

    const redirectTimer = setTimeout(() => {
      navigate('/main'); // Redirect to /main after animation ends
    }, 5000); // Ensure this time matches the total duration of the animation

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="bg-[#3b8d6e] h-screen w-screen flex items-center justify-center">
      <img
        src={bnwLogo}
        alt="Logo"
        className={`transition-transform duration-1000 ${isAnimated ? 'animate-logo' : ''}`}
      />
    </div>
  );
};

export default LogoAnimation;
