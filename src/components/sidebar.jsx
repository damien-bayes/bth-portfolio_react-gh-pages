'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/
import React, {
  useState,
  useEffect,
  useContext
} from 'react';

import Link from 'next/link';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Modular styles */
// import styles from '../styles/components/sidebar.module.scss';

/* Settings */
import AppSettings from '../settings/app';

/* Styles */
import styles from '../styles/components/sidebar.module.scss';

import socialNetworkStyles from '../styles/components/social-network.module.scss';

/*****************************************************************************/

const experienceLevels = [
  'Junior',
  'Middle',
  'Senior',
  'Lead',
  'Architect',
  'Principal',
];

const emails = [
  {
    email: 'damien.bayes.db@gmail.com',
    isPrimary: true,
  },
  {
    email: 'baythium@gmail.com',
    isPrimary: false,
  },
  {
    email: 'damien.bayes@baythium.com',
    isPrimary: false,
  }
];

const languages = [
  {
    name: 'Russian',
    level: 'Native',
  },
  {
    name: 'English',
    level: 'Upper-Intermediate',
  },
  {
    name: 'German',
    level: 'Beginner',
  }
];

const socialNetworks = [
  {
    name: 'Github',
    url: 'https://github.com/damien-bayes',
    iconUrl: '/images/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/damien-bayes',
    iconUrl: '/images/linkedin.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/damien_bayes',
    iconUrl: '/images/twitter.svg',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/damien.bayes.db1',
    iconUrl: '/images/facebook.svg',
  }
];

const Sidebar = () => {
  return (
    <aside className={styles['sidebar']}>
      <div className="container">

        {/* Card - Social Networks */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Social Networks<span className="badge badge--primary">{socialNetworks.length}</span></h2>
                </div>

                <ul className={socialNetworkStyles['social-networks']}>
                  {
                    socialNetworks.map((socialNetwork, index) => {
                      return (
                        <li className={socialNetworkStyles['social-networks__item']} key={index}>
                          <Link href={socialNetwork.url}>
                            <a className={socialNetworkStyles['social-networks__link']}>
                              <div className={socialNetworkStyles['social-networks__img-wrapper']}>
                                <img src={socialNetwork.iconUrl} alt={socialNetwork.name}/>
                              </div>
                              
                              {socialNetwork.name}
                            </a>
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>

              </div>
            </Link>
          </div>
        </div>

        {/* Card - Language Skills */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Language Skills<span className="badge badge--primary">3</span></h2>
                </div>

                <p>Additional information</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Card - Email */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Email<span className="badge badge--primary">2</span></h2>
                  <p className="headline__description">Don't feel hesitate to contact me</p>
                </div>

                <p>Additional information</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Card - Job Position */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Job Position</h2>
                  <p className="headline__description">Web Application Software Engineer</p>
                </div>

                <p>Additional information</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Card - Employment */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Employment</h2>
                  <p className="headline__description">Full-time and 5 days a week</p>
                </div>

                <p>Additional information</p>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    </aside>
  )
}

export default Sidebar;