import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Typewriter from 'typewriter-effect/dist/core';

const HomeInfo = ({ currentStage }) => {
  useEffect(() => {
    if (currentStage === 3) {
      const typewriter = new Typewriter('.typewriter-text', {
        strings: [
          "Fahrenheit to Celcius", "Celcius to Fahrenheit", "Meters to Feet", "Feet to Meters"
        ],
        autoStart: true,
        loop: true,
      });
    }
  }, [currentStage]);

  if (currentStage === 1) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Hi! I am Riadyn👋 <br /> A Computer Science Student from Ateneo de Davao University!
        </p>
        <Link to='' className='neo-brutalism-white neo-btn'>
          Hover right and be immersed!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Do you want to know your
           <br></br>Income Tax & Factorial?
        </p>
        <Link to='/taxfactorial' className='neo-brutalism-white neo-btn'>
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' /> Click Me!
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Do you want to convert?
          <br />
          <span className='typewriter-text'></span>
        </p>
        <Link to='/Convert' className='neo-brutalism-white neo-btn'>
          Click Me!
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Need a Payroll for your Employees? <br /> Have it your way. 
        </p>
        <Link to='/payroll' className='neo-brutalism-white neo-btn'>
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />Click Me
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
