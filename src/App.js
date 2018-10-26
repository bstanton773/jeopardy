import React, { Component } from 'react';
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import SingleJeopardy from './Components/SingleJeopardy'
import DoubleJeopardy from './Components/DoubleJeopardy'
import FinalJeopardy from './Components/FinalJeopardy'

import {Switch, Route} from 'react-router-dom';

import questions from './static/data/questions'
import doubleclues from './static/data/doubleclues'

class App extends Component {
  constructor(){
    super()

    this.state = {
      playerList: [],
      showScoreboard: false
    }
  }

  submitPlayer = e =>{
    e.preventDefault();
    const name = e.target.elements.name.value;
    const score = 0;
    const wager = 0;
    const newPlayer = {
      name,
      score,
      wager
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
    this.setState({showScoreboard: true})
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

  submitWager = (e, player, score) => {
    e.preventDefault();
    let playerWager = e.target.elements.wager.value
    if(playerWager > score){
      alert("Wager must be less than or equal to score")
    }else{
      var currentPlayerList = this.state.playerList.slice(0);
      currentPlayerList.forEach(e => { if(e.name === player){
      e.wager = Number.parseInt(playerWager);
    }});

    this.setState({playerList: currentPlayerList});
    }
    e.target.elements.wager.value = ""
  }

  wagerClick = (e, player) => {
    let value = e.target.value;
    var currentPlayerList = this.state.playerList.slice(0);
    if(value === "Correct"){
      currentPlayerList.forEach(e => { if(e.name === player){
        e.score += e.wager;
        e.wager = 0;
      }})
    }else{
      currentPlayerList.forEach(e => { if(e.name === player){
        e.score -= e.wager;
        e.wager = 0;
      }})
    }
    this.setState({playerList: currentPlayerList})
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Home onSumbitPlayer={this.submitPlayer} playerList={this.state.playerList} scoreboard={this.state.showScoreboard}/>}></Route>
          <Route exact path="/single" render={() => <SingleJeopardy questions={questions} onAddScore={this.addScore} onAddScoreNone={this.addScoreNone} playerList={this.state.playerList} scoreboard={this.state.showScoreboard}/>}></Route>
          <Route exact path="/double" render={() => <DoubleJeopardy questions={doubleclues} onAddScore={this.addScore} onAddScoreNone={this.addScoreNone} playerList={this.state.playerList} scoreboard={this.state.showScoreboard}/>}></Route> 
          <Route exact path="/final" render={() => <FinalJeopardy playerList={this.state.playerList} onSubmitWager={this.submitWager} onWagerClick={this.wagerClick}/>}></Route>         
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
