/**
 * File: /src/pages/_app.jsx
 * 
 * @see: https://nextjs.org/docs/advanced-features/custom-app
 */

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/
import App from 'next/app';

/*******************/
/* PROJECT IMPORTS */
/*******************/

/*
 Styles

 @see: https://nextjs.org/docs/basic-features/built-in-css-support
*/
import '@damien-bayes/baythium-aspectus_package/dist/baythium-aspectus.css';
import '../styles/custom-baythium-aspectus.scss';

/*****************************************************************************/

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

/**
 * WARNING: Only uncomment this method if you have blocking data requirements
 * for every single page in your application. This disables the ability to
 * perform automatic static optimization, causing every page in your app to
 * be server-side rendered.
 * 
 * @param {*} appContext 
 */
/*
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}*/

export default MyApp;