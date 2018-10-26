import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Jeopardy!</a>
        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/single">Single Jeopardy</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/double">Double Jeopardy</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/final">Final Jeopardy</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}
