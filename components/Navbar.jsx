'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [isDayMode, setIsDayMode] = useState(true);

  const handleIconClick = () => {
    setIsDayMode(prevMode => !prevMode);
  }

  const iconSrc = isDayMode ? '/balloontop.svg' : '/popped.svg';
  const backgroundColor = isDayMode ? '#ffffff' : '#000000';

  return (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <a href="https://www.volckano.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/volckanologowhite.svg"
          alt="Volckano logo"
          className="w-[24px] h-[24px] object-contain"
        />
      </a>
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">Balloon Trip</h2>
      <img
        src={iconSrc}
        alt="icon"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
        onClick={handleIconClick}
      />
    </div>
  </motion.nav>
  );
};

export default Navbar;
