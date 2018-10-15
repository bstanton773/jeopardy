import React, { Component } from 'react'

export default class PlayerScore extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.player.name}</td>
        <td>{this.props.player.score}</td>
      </tr>
    )
  }
}
