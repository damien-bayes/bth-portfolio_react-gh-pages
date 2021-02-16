/**
 * Route: Home
 * 
 * File: /src/pages/index.jsx
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React, {
  useEffect,
  useState,
} from 'react';
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

/* Services (APIs) */
import { requestForGettingProfile } from '../services/github';

/*****************************************************************************/

/**
 * Page: Home
 * 
 * @return {jsx}
 */
const Home = ({ profile }) => {
  /* WARNING: Called only once */
  useEffect(() => {
    console.log('Github profile response:', profile);
  }, []);

  return (
    <Layout title="Home">
      <section className="section home">

        {/* Card - Main */}
        <div className={[styles['personality-card'], 'card'].join(' ')}>
          <div className="card__body">

            <div className="row mb--5">
              <div className={[styles['personality-card__avatar'], 'column--4'].join(' ')}>
                <img
                  src={AppSettings.prefix + '/images/nerd.svg'}
                  // src={profile.avatar_url}
                  alt={AppSettings.name}
                  loading='lazy'
                />
              </div>
              <div className="column--8">
                <Link className="card__link" href="javascript:">
                  <div>
                    {/* Headline */}
                    <div className="headline">
                      <h1 className="headline__title">{profile.name}</h1>
                      <p className="headline__description">{profile.bio}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="button-collection button-collection--left-aligned">
              <button className="button button--outlined-primary button--rippled button--sm mr--5">Leave a message</button>

              <div className="button-collection button-collection--right-aligned" style={{margin: 0, flex: 1}}>
                <button className="button button--primary button--rippled button--sm mr--2">Download CV</button>
                <a
                  target="_blank"
                  href={profile.html_url}
                  className="button button--primary button--rippled button--sm mr--2"
                  rel="noopener noreferrer"
                >
                  View on Github
                </a>
              </div>
            </div>

            {/* Personality card: Summary */}
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

/*****************/
/* PRE-RENDERING */
/*****************/

export const getStaticProps = async (ctx) => {
  const res = await requestForGettingProfile('damien-bayes');

  return {
    /* NOTE: Will be passed to the page component as props */
    props: {
      profile: res.data,
    },
  }
}

/***********/
/* EXPORTS */
/***********/

export default Home;