const test = require('./test.json')
const getCommunitys = require('./community/getCommunitys.json')
const home = require('./home/home.json')
const period = require('./period/period.json')

module.exports = function() {
  return {
    test,
    getCommunitys,
    home,
    period
  }
}