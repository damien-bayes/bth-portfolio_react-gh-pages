/**
 * File: /src/pages/api/v1/hello.jsx
 */

'use strict';

export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * Handle an API request
 * 
 * Endpoint: /api/v1/hello
 */
export default async (req, res) => {
  res.json({ name: 'Hello World' });
}