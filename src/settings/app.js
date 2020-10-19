/**
 * Settings: App
 * 
 * File: /src/settings/app.js
 */

'use strict';

/*******************/
/* PROJECT IMPORTS */
/*******************/
import pkg from '../../package.json';

/*****************************************************************************/

const app = {
  name: 'Baythium Portfolio',
  version: pkg.version,
  companyName: 'Baythium Ecosystem',
  prefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default app;