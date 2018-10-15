import React, { Component } from 'react'

export default class index extends Component {
  render() {
    return (
      <button type="button" className="btn btn-light" onClick={e => this.props.onAddScore(e, this.props.question.value, this.props.player.name, this.props.question.id)}>
        {this.props.player.name}
      </button>
    )
  }
}
