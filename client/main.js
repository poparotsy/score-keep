import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players, calculatePlayerPosition} from '../imports/api/players';
import {Tracker} from 'meteor/tracker';
import App from '../imports/ui/App';

// Tracker cause some delay to fetch/sync ServerMongo and ClientMiniMongo.
Tracker.autorun( () => {
  console.log('Players', Players.find().fetch());
});

// setTimeout(function () {
//
// }, 1000);

Meteor.startup( () => {
  Tracker.autorun( () => {
  let players = Players.find({}, {sort:{score: -1}}).fetch();
  let positionedPlayers = calculatePlayerPosition(players);
  let title  = "Score Keep App";
  let subtitle = '';

  ReactDOM.render(<App title={title} players={positionedPlayers} subtitle={subtitle}/>, document.getElementById('app'));
  });
});
