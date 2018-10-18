import React, { Component } from 'react'
import PlayerScore from '../PlayerScore'

export default class Scoreboard extends Component {
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
          {this.props.playerList.map((player, key) => <PlayerScore player={player} key={key}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}
