/**
 * File: /src/pages/_document.jsx
 * 
 * @see: https://nextjs.org/docs/advanced-features/custom-document
 */

'use strict';

/***********************/
/* THIRD-PARTY IMPORTS */
/***********************/
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

import React, { useContext } from 'react';

/*****************************************************************************/

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="baythium-aspectus baythium-aspectus--light">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;