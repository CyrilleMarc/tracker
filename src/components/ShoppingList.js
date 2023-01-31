// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../assets/styles/shoppingList.css'

export class ShoppingList extends Component {
  static propTypes = {}

  render() {
    return (
      <div className = "ShoppingList">
    <h1>Shopping List for {this.props.name} </h1>
        <ul>
            <li>Cereal</li>
            <li>Milk</li>
            <li>Bananas</li>
        </ul>
      </div>
    )
  }
}

export default ShoppingList