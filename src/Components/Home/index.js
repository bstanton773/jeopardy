import React, { Component } from 'react'
import Scoreboard from '../Scoreboard'

export default class Home extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSumbitPlayer}>
          <div className="form-row">
            <div className="col-2"></div>
            <div className="col-6">
              <input type="text" className="form-control" name="name" placeholder="Add a player" />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary">Add Player</button>
            </div>
            <div className="col-2"></div>
          </div>
        </form>
        {this.props.scoreboard ? <Scoreboard playerList={this.props.playerList}/> : null}
      </div>
    )
  }
}
