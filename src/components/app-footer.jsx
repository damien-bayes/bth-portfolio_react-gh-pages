/**
 * @see: https://medium.com/@hirodeath/how-to-write-hyphen-in-css-modules-639e53d6740a
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/
import React, {
  useState,
  useEffect,
  useContext
} from 'react';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Modular styles */
import styles from '../styles/components/app-footer.module.scss';

/* Settings */
import AppSettings from '../settings/app';

/*****************************************************************************/

const Footer = () => {
  return (
    <footer className={styles['app-footer']}>
      <div className="container">

        { /* Deck 3: Brand */ }
        <div className={styles['app-footer__brand']}>
          <img src="/images/baythium-ecosystem-2.svg" alt={AppSettings['company-name']}/>
        </div>

        { /* Deck 4: Copyright */ }
        <div className={styles['app-footer__copyright']}>
          <p>&copy; {new Date().getFullYear()} {AppSettings['company-name']}</p>
          <p>Copyright</p>
        </div>

        { /* Deck 5: Synthesis */ }
        <div className={[styles['app-footer__synthesis'], 'text-sm-1--right'].join(' ')}>
          <ul></ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;