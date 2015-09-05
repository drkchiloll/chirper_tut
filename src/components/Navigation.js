var React = require('react'),
    Link = require('react-router').Link,
    UserStore = require('../stores/users');

var Navigation = module.exports = React.createClass({
  getInitialState : function() {
    return {
      username : UserStore.currentUser.username
    };
  },
  render : function() {
    return (
      <ul>
        <li> <Link to='home'> Timeline </Link> </li>
        <li> <Link to='users'> Users </Link> </li>
        <li> <a href='/logout'>Logout</a> ({this.state.username}) </li>
      </ul>
    );
  }
})
