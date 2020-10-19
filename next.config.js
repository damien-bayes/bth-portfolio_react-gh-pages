/**
 * Next.js Configurations
 * 
 * NOTE: It gets used by the Next.js server and build phases, and it's not
 * included in the browser build.
 */

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}