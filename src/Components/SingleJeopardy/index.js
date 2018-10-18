import React, { Component } from 'react'
import QuestionItem from '../QuestionItem'
import PlayerScore from '../PlayerScore'


export default class SingleJeopardy extends Component {

  render() {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-2"><h5 align="center">Category 1</h5></div>
          <div className="col-2"><h5 align="center">Category 2</h5></div>
          <div className="col-2"><h5 align="center">Category 3</h5></div>
          <div className="col-2"><h5 align="center">Category 4</h5></div>
          <div className="col-2"><h5 align="center">Category 5</h5></div>
          <div className="col-2"><h5 align="center">Category 6</h5></div>
          {this.props.questions.map((question,key) => <QuestionItem question={question} key={question.id} players={this.props.playerList} onAddScore={this.props.onAddScore} onAddScoreNone={this.props.onAddScoreNone}/>)}
        </div>
        <div className="row">
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
      </div>
    )
  }
}
