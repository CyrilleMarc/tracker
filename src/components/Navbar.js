import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className="navbar-brand">Tracker</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                    <Link to='/' className="nav-link">Exercices</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/create' className="nav-link">Create Exercice</Link>
                </li>
                <li className="navbar-item">
                    <Link to='/user' className="nav-link">Create User</Link>
                </li>
            </ul>
        </div>

      </nav>
    )
  }
}

