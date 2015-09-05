var constants = require('../constants'),
    UserStore = require('./users');

var ChirpStore = module.exports = require('./store').extend({
  init : function() {
    this.bind(constants.GOT_CHIRPS, this.set);
    this.bind(constants.CHIRPED, this.add);
  },
  timeline : function() {
    var ids = [UserStore.currentUser.cid].concat(UserStore.currentUser.following);
    return this._data.filter(function(chirps) {
      return ids.indexOf(chirps.userId) > -1
    });
  }
})
