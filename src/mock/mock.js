const test = require('./test.json')
const getCommunitys = require('./community/getCommunitys.json')
const period = require('./period/period.json')
const users = require('./profile/profile.json')
const getLoveRank = require('./community/getLoveRank.json')

module.exports = function() {
  return {
    test,
    getCommunitys,
    period,
    users,
    getLoveRank
  }
}