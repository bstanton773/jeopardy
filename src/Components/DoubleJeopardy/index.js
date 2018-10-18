import React, { Component } from 'react'
import QuestionItem from '../QuestionItem'
import Scoreboard from '../Scoreboard'

export default class DoubleJeopardy extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <div className="col-2"><h5 align="center">Category 1</h5></div>
        <div className="col-2"><h5 align="center">Category 2</h5></div>
        <div className="col-2"><h5 align="center">Category 3</h5></div>
        <div className="col-2"><h5 align="center">Category 4</h5></div>
        <div className="col-2"><h5 align="center">Category 5</h5></div>
        <div className="col-2"><h5 align="center">Category 6</h5></div>
        {this.props.questions.map((question,key) => <QuestionItem question={question} key={question.id} players={this.props.playerList} onAddScore={this.props.onAddScore} onAddScoreNone={this.props.onAddScoreNone}/>)}
      </div>
      {this.props.showScoreboard ? <Scoreboard playerList={this.state.playerList}/> : null}
      </div>
    )
  }
}
