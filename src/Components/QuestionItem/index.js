import React, { Component } from 'react'
import PlayerButton from '../PlayerButton'

export default class QuestionItem extends Component {
  render() {
    const question = this.props.question;
    return (
      <div className="col-2">
        <div className="card" id={question.id}>
        <h5 align="center">{question.value}</h5>
        <div className="form-row text-center">
        <div className="col-12">
          {this.props.players.map((player,key) => <PlayerButton player={player} key={key} question={question} onAddScore={this.props.onAddScore}/>)}
          <button type="button" className="btn btn-light" onClick={e => this.props.onAddScoreNone(e, this.props.question.id)}>None</button>
        </div>
      </div>
        </div>
      </div>
    )
  }
}
