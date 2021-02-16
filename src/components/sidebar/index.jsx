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

/* Styles */
import styles from '../../styles/components/sidebar.module.scss';

/* Components */
import SocialNetworks from './components/social-networks';
import Languages from './components/languages';
import Emails from './components/emails';
import JobPosition from './components/job-position';
import WorkDays from './components/work-days';

/* Data */
import emailsData from '../../data/emails';
import workdaysData from '../../data/workdays';
import jobPositionData from '../../data/job-position';
import languagesData from '../../data/languages';
import socialNetworksData from '../../data/social-networks';

/*****************************************************************************/

/**
 * Component: Sidebar
 * 
 * @return {jsx}
 */
const Sidebar = () => {
  return (
    <aside className={styles['sidebar']}>
      <div className="container">

        {/* Card - Social Networks */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>

                <SocialNetworks data={socialNetworksData}/>

              </div>
            </Link>
          </div>
        </div>

        {/* Card - Language Skills */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>

                <Languages data={languagesData}/>

              </div>
            </Link>
          </div>
        </div>

        {/* Card - Email */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>

                <Emails data={emailsData}/>

              </div>
            </Link>
          </div>
        </div>

        {/* Card - Job Position */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>

                <JobPosition data={jobPositionData}/>

              </div>
            </Link>
          </div>
        </div>

        {/* Card - Employment */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>

                <WorkDays data={workdaysData}/>

              </div>
            </Link>
          </div>
        </div>
        
      </div>
    </aside>
  )
}

export default Sidebar;