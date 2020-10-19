/**
 * This is a layout component that is used in the app pages as a kind of
 * template
 * 
 * File: /src/components/layouts/base.jsx
 * 
 * @see: https://codeburst.io/build-a-chat-app-with-sentiment-analysis-using-next-js-c43ebf3ea643
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/
import React, { Fragment } from 'react';

/*
 * Import the next/head component to add meta information to the <head> of
 * our pages
 */
import Head from 'next/head';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/* Settings */
import AppSettings from '../../settings/app';

/* Components */
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

/*****************************************************************************/

const Layout = (props) => (
  <Fragment>
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width,initial-scale=1.0"/>

      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

      <meta name="robots" content="index, follow"/>
      <meta name="googlebot" content="all"/>
      <meta name="google" content="notranslate"/>
      <meta name="rating" content="general"/>
      <meta name="coverage" content="worldwide"/>
      <meta name="target" content="all"/>
      <meta name="revisit-after" content="3 days"/>

      <meta name="keywords" content="baythium, baythium ecosystem, baythium family, portfolio, cv, curriculum vitae"></meta>
      <meta name="description" content=""></meta>

      <meta name="theme-color" content="#ffffff"/>

      <meta name="msapplication-navbutton-color" content="#ffffff"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>

      <meta name="apple-mobile-web-app-status-bar-style" content="default"/>

      <meta property="og:title" content={props.title} key="title"/>

      {/* Set the page title dynamically from props */}
      <title>{props.title} - {AppSettings.name}</title>
    </Head>

    <AppHeader/>
    <main className="container">
      {/* Render the page contents using {props.children} */}
      {props.children}
    </main>
    <AppFooter/>
  </Fragment>
);

export default Layout; 