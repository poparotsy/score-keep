
import React from 'react';
import {Players} from '../api/players';

export default class AddPlayer extends React.Component {

  handleSubmit(e) {
    let playerName = e.target.playerName.value;

    // debugger tells Chrome to stop here,
    // debugger;

    if(playerName) {
      e.target.playerName.value = "";
      // insert playerName to the Collection
      Players.insert({
        name: playerName,
        score: 0
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="item">

              <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
                <button className="button">Add Player</button>
              </form>
        </div>
    );
  }
}
