// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
  env: {
    SERVER_URL: process.env.REACT_APP_SERVER_URL 
  }
})