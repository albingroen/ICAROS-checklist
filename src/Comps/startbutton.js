import React from 'react'
import { Link } from 'react-router-dom'

export class Startbutton extends React.Component {
  render() {
    return (
      <div className="button-wrapper">
        <Link to={this.props.path}>
          <button>{this.props.text}</button>
        </Link>
      </div>
    )
  }
}
