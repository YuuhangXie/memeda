const test = require('./test.json')
const getCommunitys = require('./community/getCommunitys.json')
const period = require('./period/period.json')
const home = require('./home/home.json')
const ourWish = require('./gift/ourwish.json')
const taWish = require('./gift/tawish.json')
const users = require('./profile/users_info.json')
const myWish = require('./gift/mywish.json')
const giftAva = require('./gift/giftAva.json')

module.exports = function() {
  return {
    test,
    getCommunitys,
    period,
    home,
    ourWish,
    taWish,
    users,
    myWish,
    giftAva
  }
}