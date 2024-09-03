import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bnwLogo from './../images/bnwbanx.png';
import './../index.css'; 

const LogoAnimation = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimated(true);
    }, 1000); 

    const redirectTimer = setTimeout(() => {
      navigate('/main'); 
    }, 5000); 

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
