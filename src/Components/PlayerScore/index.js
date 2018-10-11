import React, { Component } from 'react'

export default class PlayerScore extends Component {
  render() {
    return (
      <div>
        <p>{this.props.player.name}</p>
        <p>{this.props.player.score}</p>
      </div>
    )
  }
}
