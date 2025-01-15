import React from 'react';
import { Switch } from '@headlessui/react';

const Header = ({ darkMode, setDarkMode, openModal }) => {
  return (
    <header className="flex justify-end items-center p-4 bg-cyberpunk-dark text-white">
      <div className="flex items-center space-x-4">
        <button onClick={openModal} className="hover:text-cyberpunk-pink">Login</button>
        <button onClick={openModal} className="hover:text-cyberpunk-pink">Register</button>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${darkMode ? 'bg-cyberpunk-green' : 'bg-cyberpunk-purple'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 ease-in-out`}
        >
          <span className="sr-only">Enable dark mode</span>
          <span
            className={`${darkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ease-in-out`}
          />
        </Switch>
      </div>
    </header>
  );
};

export default Header;
