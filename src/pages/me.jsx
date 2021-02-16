/**
 * Route: Hobby
 * 
 * File: /src/pages/hobby.jsx
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/

import React, { useEffect } from 'react';
/* @see: https://stackoverflow.com/a/34688574 */
import marked from 'marked';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Layouts */
import Layout from '../components/layouts/base';

/* Data */
import summaryData from '../data/summary.md';

/*****************************************************************************/

/**
 * Page: Me
 */
const Me = ({ markup }) => {
  /* WARNING: Called only once */
  useEffect(() => {
    console.log('Markup response:', markup);
  }, []);

  return (
    <Layout title="Me">
      <section className="section me">
        {/* Card */}
        <div className='card'>
          <div className="card__body">
            <div dangerouslySetInnerHTML={{ __html: markup }}></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

/*****************/
/* PRE-RENDERING */
/*****************/

Me.getInitialProps = async (ctx) => {
  const data = marked(summaryData);

  return {
    markup: data,
  }
}

export default Me;