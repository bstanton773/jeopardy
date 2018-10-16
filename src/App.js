import React, { Component } from 'react';
import Navigation from './Components/Navigation'
import Board from './Components/Board'
import DoubleJeopardy from './Components/DoubleJeopardy'

import questions from './static/data/questions'
import doubleclues from './static/data/doubleclues'

class App extends Component {
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

  addScore = (e, points, player, id) => {
    
    var currentPlayerList = this.state.playerList.slice(0);
    currentPlayerList.forEach(e => { if(e.name === player){
      e.score += Number.parseInt(points);
    }});

    this.setState({playerList: currentPlayerList});

    const questionCard = document.getElementById(id)
    questionCard.style.display = "none";
  }

  addScoreNone = (e, id) => {
    const questionCard = document.getElementById(id)
    questionCard.style.display = "none";
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Board questions={questions} onAddScore={this.addScore} onAddScoreNone={this.addScoreNone} playerList={this.state.playerList} onSumbitPlayer={this.submitPlayer}/>
        <DoubleJeopardy questions={doubleclues} onAddScore={this.addScore} onAddScoreNone={this.addScoreNone} playerList={this.state.playerList}/>
      </div>
    );
  }
}

export default App;
