var React = require('react'),
    utils = require('../utils'),
    Link = require('react-router').Link,
    moment = require('moment');

var ChirpBox = module.exports = React.createClass({
  render : function() {
    var user = this.props.user;
    var timestamp = this.props.timestamp ? ' ' + String.fromCharCode(8226) +
      ' ' + this.props.timestamp : '';
    var id = (typeof user.userId === 'number') ? user.userId : user.cid;
    return (
      <li className='row chirp'>
        <Link className='two columns' to='user' params={ {id : id} }>
          <img src={utils.avatar(user.email)}/>
        </Link>
        <div className='ten columns'>
          <p>
            <strong> {user.fullname} </strong>
            <span className='timestamp'>
              @{user.username} {timestamp}
            </span>
          </p>
          <p> {this.props.children} </p>
        </div>
      </li>
    );
  }

})
