var React = require('react'),
    Box = require('./ChirpBox'),
    UserStore = require('../stores/users'),
    moment = require('moment');

var ChirpList = module.exports = React.createClass({
  render : function() {
    var items = this.props.chirps.map(function(chirp) {
      return (
        <Box
          key={chirp.cid}
          user={chirp}
          timestamp={moment(chirp.$created).fromNow()}>
          {chirp.text}
        </Box>
      );
    });
    return (
      <ul> {items} </ul>
    );
  }
});
