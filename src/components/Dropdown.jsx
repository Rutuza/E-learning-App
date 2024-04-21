import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='dropdown'>
      <button type="button" className='dropdown-toggle' onClick={toggleMenu}>
        Toggle Dropdown
      </button>
      {
        isOpen && (
            <div className='dropdown-content'>
                <a href="">Weekly</a>
                <a href="">Monthly</a>
                <a href="">Yearly</a>
            </div>
        )
      }
    </div>
  );
}

export default Dropdown;
