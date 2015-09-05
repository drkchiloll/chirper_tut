var React = require('react'),
    actions = require('../actions'),
    UserStore = require('../stores/users');

var FollowButton = module.exports = React.createClass({
  getInitialState : function() {
    return {
      id : UserStore.currentUser.cid,
      currentlyFollowing : UserStore.currentUser.following
    };
  },
  componentDidMount : function() {
    UserStore.addChangeListener(this.onChange);
  },
  componentWillUnmount : function() {
    UserStore.removeChangeListener(this.onChange);
  },
  onChange : function() {
    this.setState(this.getInitialState());
  },
  render : function() {
    if(this.state.id === this.props.userId) {
      return (
        <span> This is You! </span>
      );
    }

    var text, action;
    if(this.state.currentlyFollowing.indexOf(this.props.userId) > -1) {
      text = 'Unfollow';
      action = this.unfollow;
    } else {
      text = 'Follow',
      action = this.follow;
    }
    return (
      <button onClick={action}> {text} </button>
    );
  },
  unfollow : function() {
    actions.unfollow(this.props.userId);
  },
  follow : function() {
    actions.follow(this.props.userId);
  }
})
