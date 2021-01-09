import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line
  const [button, setButton] = useState(true);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            StockStats
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/News_Page'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                News
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Stocks' className='nav-links' onClick={closeMobileMenu}>
                Stocks
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Crypto'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Crypto
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/CryptoChart'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CryptoChart
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Favourites' className='nav-links' onClick={closeMobileMenu}>
                Favourites
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;