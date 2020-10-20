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
import twoLinedTextStyles from '../styles/components/two-lined-text.module.scss';
import seriesStyles from '../styles/components/series.module.scss';

/*****************************************************************************/

const jobPosition = {
  name: 'Web Application Software Engineer',

  levels: [
    {
      name: 'Junior',
      isActive: false,
    },
    {
      name: 'Middle',
      isActive: false,
    },
    {
      name: 'Senior',
      isActive: true,
    },
    {
      name: 'Lead',
      isActive: false,
    },
    {
      name: 'Architect',
      isActive: false,
    },
    {
      name: 'Principal',
      isActive: false,
    }
  ]
}

const emails = [
  {
    address: 'damien.bayes.db@gmail.com',
    isPrimary: true,
  },
  {
    address: 'baythium@gmail.com',
    isPrimary: false,
  },
  {
    address: 'damien.bayes@baythium.com',
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

const workdays = [
  {
    fullName: 'Sunday',
    shortName: 'Sun',
    isActive: false,
  },
  {
    fullName: 'Monday',
    shortName: 'Mon',
    isActive: true,
  },
  {
    fullName: 'Tuesday',
    shortName: 'Tue',
    isActive: true,
  },
  {
    fullName: 'Wednesday',
    shortName: 'Wed',
    isActive: true,
  },
  {
    fullName: 'Thursday',
    shortName: 'Thu',
    isActive: true,
  },
  {
    fullName: 'Friday',
    shortName: 'Fri',
    isActive: true,
  },
  {
    fullName: 'Saturday',
    shortName: 'Sat',
    isActive: false,
  }
]

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
                          <a href={socialNetwork.url} rel="noreferrer" target="_blank" className={socialNetworkStyles['social-networks__link']}>
                            <div className={socialNetworkStyles['social-networks__img-wrapper']}>
                              <img src={AppSettings.prefix + socialNetwork.iconUrl} alt={socialNetwork.name}/>
                            </div>
                            
                            {socialNetwork.name}
                          </a>
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
                  <h2 className="headline__title">Language Skills<span className="badge badge--primary">{languages.length}</span></h2>
                </div>

                <ul>
                  {
                    languages.map((language, index) => {
                      return (
                        <li key={index}>
                          <div className={twoLinedTextStyles['two-lined-text']}>
                            <p className={twoLinedTextStyles['two-lined-text__chain']}>{language.level}</p>
                            <h6 className={twoLinedTextStyles['two-lined-text__anchor']}>{language.name}</h6>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>

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
                  <h2 className="headline__title">Email<span className="badge badge--primary">{emails.length}</span></h2>
                  <p className="headline__description">Don't feel hesitate to contact me</p>
                </div>

                <ul>
                  {
                    emails.map((email, index) => {
                      return (
                        <li key={index}>
                          <div className={twoLinedTextStyles['two-lined-text']}>
                            <p className={twoLinedTextStyles['two-lined-text__chain']}>{email.isPrimary ? 'Primary' : 'Secondary'}</p>
                            <h6 className={twoLinedTextStyles['two-lined-text__anchor']}>{email.address}</h6>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>

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
                  <p className="headline__description">{jobPosition.name}</p>
                </div>

                <ul className={seriesStyles['series']}>
                  {
                      jobPosition.levels.map((level, index) => {
                        return (
                          <li key={index} className={[level.isActive ? seriesStyles['series__item--active'] : null, seriesStyles['series__item']].join(' ')}>{level.name}</li>
                        )
                      })
                    }
                </ul>
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

                <ul className={seriesStyles['series']}>
                  {
                      workdays.map((workday, index) => {
                        return (
                          <li key={index} className={[workday.isActive ? seriesStyles['series__item--active'] : null, seriesStyles['series__item']].join(' ')}>{workday.shortName}</li>
                        )
                      })
                    }
                </ul>
              </div>
            </Link>
          </div>
        </div>
        
      </div>
    </aside>
  )
}

export default Sidebar;