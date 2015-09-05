var React = require('react'),
    ChirpInput = require('./ChirpInput'),
    actions = require('../actions');
var ChirpList = require('./ChirpList');
var ChirpStore = require('../stores/chirps');

var Home = module.exports = React.createClass({
  getInitialState : function() {
    return {
      chirps : ChirpStore.timeline()
    };
  },
  mixin : [ChirpStore.mixin],
  onChange : function() {
    this.setState(this.getInitialState());
  },
  render : function() {
    return (<div>
              <ChirpInput onSave={this.saveChirp}/>
              <ChirpList chirps={this.state.chirps}/>
            </div>
           );
  },
  saveChirp : function(text) {
    actions.chirp(text);
  }
});
