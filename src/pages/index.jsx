/**
 * Route: Home
 * 
 * File: /src/pages/index.jsx
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import Link from 'next/link';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Layouts */
import Layout from '../components/layouts/base';

/* Settings */
import AppSettings from '../settings/app';

/* Styles */
import styles from '../styles/pages/home.module.scss';

/*****************************************************************************/

const Home = () => {
  return (
    <Layout title="Home">
      <section className="home">

        {/* Card - Main */}
        <div className={[styles['personality-card'], 'card'].join(' ')}>
          <div className="card__body">

            <div className="row">
              <div className={[styles['personality-card__avatar'], 'column--4'].join(' ')}>
                <img src={AppSettings.prefix + '/images/nerd.svg'} alt={AppSettings.name}/>
              </div>
              <div className="column--8">
                <Link className="card__link" href="javascript:">
                  <div>
                    {/* Headline */}
                    <div className="headline">
                      <h1 className="headline__title">Damien Bayes</h1>
                      <p className="headline__description">Web application software engineer, DevOps, Unix system administrator, UI/UX designer, electricity enthusiast, speaker and a creator of Bayesian Ecosystem</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="button-collection button-collection--left-aligned">
              <button className="button button--outlined-primary button--rippled button--sm mr--5">Leave a message</button>
              <button className="button button--primary button--rippled button--sm mr--5">Download CV</button>
            </div>

            <div className="personality-card__summary">
              <h3>Summary</h3>
              <p>I maintained IBM DataPower gateway platforms and have been developing web applications mostly as a front-end developer using modern frameworks like Vue, React and Angular.</p>
              <p>In addition, I really like using Node (Express.js) that accelerates my productivity as never before, however if there is really no need to use either a library or framework, then I don't. Frankly, I don't like to complicate things with 3rd party libraries and I tend to solve the problems using custom solutions and methods...</p>
              <Link href="/me">
                <a className="button button--primary button--rippled button--sm">Read</a>
              </Link>
            </div>
          </div>
        </div>

        {/* Card - Banner */}
        <div className="card freelancing-card">
          <div className="card__body">

            <div className="row">
              <div className="column__sm--4 text--center">
                <Link href="/hiring">
                  <a className="button button--secondary mb--2 button--rippled button--sm">Why should you hire me?</a>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Card - Work Experience */}
        <div className="card">
          <div className="card__body">

            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Work Experience</h2>
                  <p className="headline__description">Have more than 5 years of great programming experience</p>
                </div>

                <Link href="/work-experience">
                  <a className="button button--primary button--rippled button--sm">View All</a>
                </Link>
              </div>
            </Link>

          </div>
        </div>

        {/* Card - Services */}
        <div className="card">
          <div className="card__body">
            <Link className="card__link" href="javascript:">
              <div>
                {/* Headline */}
                <div className="headline headline--labeled">
                  <h2 className="headline__title">Services</h2>
                  <p className="headline__description">Have a look at my services</p>
                </div>

                <Link href="/service">
                  <a className="button button--primary button--rippled button--sm">View All</a>
                </Link>

              </div>
            </Link>
          </div>
        </div>

      </section>
    </Layout>
  )
}

export default Home;