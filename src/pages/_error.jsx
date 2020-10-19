/**
 * File: /src/pages/_error.jsx
 * 
 * WARNING: The pages/_error.js file is only used in production.
 * In development you'll get an error with the call stack to know where
 * the error originated from.
 * 
 * @see: https://next-site-git-new-docs.zeit.now.sh/docs/advanced-features/custom-error-page
 */

'use strict';

/**
 * 
 * @param {*} param0 
 */
const Error = ({ statusCode }) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res 
    ? res.statusCode 
    : err 
      ? err.statusCode 
      : 404;
  return { statusCode }
}

export default Error;