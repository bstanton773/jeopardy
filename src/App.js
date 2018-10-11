import React, { Component } from 'react';
import Navigation from './Components/Navigation'
import Board from './Components/Board'
import questions from './static/data/questions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Board questions={questions}/>
      </div>
    );
  }
}

export default App;
