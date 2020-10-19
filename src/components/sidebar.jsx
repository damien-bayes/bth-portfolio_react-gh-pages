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
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/damien-bayes',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/damien_bayes',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/damien.bayes.db1',
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
                  <h2 className="headline__title">Social Networks<span className="badge badge--primary">4</span></h2>
                </div>

                <p>Additional information</p>
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