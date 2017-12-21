import React from 'react'

export class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className="title">This is {this.props.country}'s checklist.</h1>
      </header>
    )
  }
}
