const test = require('./test.json')
const home = require('./home/home.json')
const ourWish = require('./gift/ourwish.json')
const taWish = require('./gift/tawish.json')

module.exports = function() {
  return {
    test,
    home,
    ourWish,
    taWish
  }
}