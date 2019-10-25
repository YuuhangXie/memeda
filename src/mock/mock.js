const test = require('./test.json')
const getCommunitys = require('./community/getCommunitys.json')
const home = require('./home/home.json')
const users = require('./profile/profile.json')
const getLoveRank = require('./community/getLoveRank.json')
const diaryContent = require('./diary/diartMain.json')

module.exports = function() {
  return {
    test,
    getCommunitys,
    home,
    users,
    getLoveRank,
    diaryContent
  }
}