/**
 * File: /src/pages/404.jsx
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import Link from 'next/link';

/*******************/
/* PROJECT IMPORTS */
/*******************/
// import i18n from 'settings/i18n';

/* Layouts */
import Layout from '../components/layouts/base';

/* Settings */
import AppSettings from '../settings/app';

/* Styles */
import styles from '../styles/pages/not-found.module.scss';

/*****************************************************************************/

/**
 * 
 */
const Custom404 = () => {
  return (
    <Layout title="Page Not Found">
      <section className={styles["not-found"]}>

        {/* Card */}
        <div className="card">
          <div className="card__body">

            <div className="row">
              <div className={[styles['not-found__img-wrapper'], 'column__md--6'].join(' ')}>
                <img src={AppSettings.prefix + '/images/page-not-found.svg'} alt="Page Not Found"/>
              </div>

              <div className={[styles['not-found__content'], 'column__md--6'].join(' ')}>
                {/* Headline */}
                <div className="headline">
                  <h1 className="headline__title">Page Not Found</h1>
                  <p className="headline__description">Sorry, but the page you are looking for is not found. Please, make sure you have typed the correct URL</p>
                </div>

                <div className="btn-collection btn-collection--center-aligned">
                  <Link href="/">
                    <a className="button button--primary button--sm button--rippled mr--4">Back To Home</a>
                  </Link>
                  <Link href="/">
                    <a className="button button--primary button--sm button--rippled">Contact Us</a>
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>


      </section>

    </Layout>
  )
}

export default Custom404;