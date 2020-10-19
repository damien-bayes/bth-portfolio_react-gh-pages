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
import navigationStyles from '../styles/components/navigation.module.scss';

/* Settings */
import AppSettings from '../settings/app';

/*****************************************************************************/

const Header = () => {
  return (
    <header className={styles['app-header']}>
      <div className="container">

        { /* Deck 1: System */ }
        <div className={styles['app-header__system']}>
          <div className="row">
            <div className="column--6">
              <a href="#">Ecosystem</a>
              <a href="https://support.baythium.com">Support Center</a>
            </div>

            <div className="column--6" style={{ textAlign: 'right' }}>
              <a href="https://auth.baythium.com/sign-up">Sign Up</a>
              <a href="#">Sign In</a>
            </div>
          </div>
        </div>

        { /* Deck 2 */ }
        <div className={styles['app-header__default']}>
          <div>
            <div className={styles['app-header__brand']}>
              <a href="/">
                <img src="/images/baythium-ecosystem-1.svg" alt=""/>
                {AppSettings.name}
              </a>
            </div>
          </div>
          <div>
            <div className={styles['app-header__parallelogram']}>English</div>
          </div>
        </div>

        { /* Deck 3: Navigation */ }
        <nav className={navigationStyles.navigation}>
          { /* <button class="navigation__button">&#8249;</button> */ }

          <div className={navigationStyles['navigation__wrapper']}>
            <ul className={navigationStyles['navigation__list']}>
              <li className={navigationStyles['navigation__item']} data-navigation-id="1">
                <a className={navigationStyles['navigation__link']} href={AppSettings.prefix + '/'}>Home</a>
              </li>
              <li className={navigationStyles['navigation__item']} data-navigation-id="2">
                <a className={navigationStyles['navigation__link']} href={AppSettings.prefix + '/about'}>About</a>
              </li>
            </ul>
          </div>

          { /* <!-- <button class="navigation__button">&#8250;</button> */ }
        </nav>

      </div>
    </header>
  )
}

export default Header;