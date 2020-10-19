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

/*****************************************************************************/

const Home = () => {
  return (
    <Layout title="Home">
      <h1>Home Page 1</h1>
      <p>Description</p>

      <Link href="/work-experience">
        <a>Work Experience</a>
      </Link>
    </Layout>
  )
}

export default Home;