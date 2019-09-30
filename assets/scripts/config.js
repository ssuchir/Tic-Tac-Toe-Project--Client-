'use strict'

let apiUrl
const apiUrls = {
  production: 'https://tic-tac-toe-wdi-production.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
}
// two of the link will be replacing bu d/f url

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
