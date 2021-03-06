var React = require('react'),
    UserStore = require('../stores/users'),
    actions = require('../actions'),
    Link = require('react-router').Link,
    Box = require('./ChirpBox'),
    FollowButton = require('./FollowButton');

var UserList = module.exports = React.createClass({
  getInitialState : function() {
    return {
      users : UserStore.all(),
      user : UserStore.currentUser
    }
  },
  mixin : [UserStore.mixin],
  onChange : function() {
    this.setState(this.getInitialState());
  },
  render : function() {
    var items = this.state.users.filter(function(user) {
      return this.state.user.cid !== user.cid;
    }.bind(this)).map(function(user) {
      return (
        <Box user={user} key={user.cid}>
          <FollowButton userId={user.cid}/>
        </Box>
      );
    });
    return (
      <ul> {items} </ul>
    );
  }
});
