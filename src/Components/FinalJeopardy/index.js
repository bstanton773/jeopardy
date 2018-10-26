import React, { Component } from 'react'
import FinalWager from '../FinalWager'

export default class FinalJeopardy extends Component {
  render() {
    return (
      <div className="row">
        {this.props.playerList.map((player, key) => <FinalWager player={player} key={key} onSubmitWager={this.props.onSubmitWager} onWagerClick={this.props.onWagerClick}/>)}
      </div>
    )
  }
}
