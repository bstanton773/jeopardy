import React, { Component } from 'react'

export default class FinalWager extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
        <h4 align="center">{this.props.player.name}</h4>
        <h6 align="center">{this.props.player.score}</h6>
        <form onSubmit={e => this.props.onSubmitWager(e, this.props.player.name, this.props.player.score)}>
          <div className="form-group row">
            <div className="col-sm">Wager:</div>
            <div className="col-sm">
              <input type="text" className="form-control" name="wager"/>
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-primary">Submit Wager</button>
            </div>
          </div>
        </form>
        <div className="clearfix">
          <button className="btn btn-success col-6" value="Correct" onClick={e => this.props.onWagerClick(e, this.props.player.name)}>Correct</button>
          <button className="btn btn-danger col-6" value="Incorrect" onClick={e => this.props.onWagerClick(e, this.props.player.name)}>Incorrect</button>
        </div>
        </div>
      </div>
    )
  }
}
