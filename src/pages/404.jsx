/**
 * File: /src/pages/404.jsx
 */

'use strict';

/*******************/
/* PROJECT IMPORTS */
/*******************/
// import i18n from 'settings/i18n';

/* Layouts */
import Layout from '../components/layouts/base';

/*****************************************************************************/

/**
 * 
 */
const Custom404 = () => {
  return (
    <Layout title="Page Not Found">
      <h1>404</h1>
      <p>Oops! Page Not Found</p>

      <p>Sorry, but the page you are looking for is not found. Please, make sure you have typed the correct URL</p>
    </Layout>
  )
}

export default Custom404;