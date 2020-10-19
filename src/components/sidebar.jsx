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

/*****************************************************************************/

const Sidebar = () => {
  return (
    <aside style={{ width: "400px" }}>
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