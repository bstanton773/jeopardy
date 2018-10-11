import React, { Component } from 'react'
import QuestionItem from '../QuestionItem'
import PlayerScore from '../PlayerScore'


export default class Board extends Component {
  constructor(){
    super()

    this.state = {
      playerList: []
    }
  }

  submitPlayer = e =>{
    e.preventDefault();
    const name = e.target.elements.name.value;
    const score = 0;
    const newPlayer = {
      name,
      score
    };
    console.log(name + ": " + score);
    console.log(newPlayer);
    e.target.elements.name.value = "";
    name ? this.addPlayer(newPlayer) : alert('Invalid Player');
  }

  addPlayer = submittedPlayer => {
    let players = this.state.playerList.slice(0);
    players.push(submittedPlayer);

    this.setState(({
      playerList: players
    }))
  }

  addScore = (e, points, player) => {
    
    var currentPlayerList = this.state.playerList.slice(0);
    currentPlayerList.forEach(e => { if(e.name === player){
      e.score += Number.parseInt(points);
    }});

    this.setState({playerList: currentPlayerList});
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitPlayer}>
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
        <div className="row">
          <div className="col-2"><h5 align="center">Category 1</h5></div>
          <div className="col-2"><h5 align="center">Category 2</h5></div>
          <div className="col-2"><h5 align="center">Category 3</h5></div>
          <div className="col-2"><h5 align="center">Category 4</h5></div>
          <div className="col-2"><h5 align="center">Category 5</h5></div>
          <div className="col-2"><h5 align="center">Category 6</h5></div>
          {this.props.questions.map((question,key) => <QuestionItem question={question} key={question.id} players={this.state.playerList} onAddScore={this.addScore}/>)}
        </div>
        <div className="row">
        {this.state.playerList.map((player) => <PlayerScore player={player}/>)}
        </div>
      </div>
    )
  }
}
