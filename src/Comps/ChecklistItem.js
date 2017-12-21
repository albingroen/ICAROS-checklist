import React from 'react'

export class ChecklistItem extends React.Component {
  render() {
    return (
      <div className="checklist-wrapper">
        <div className="item-container">
          <input type="checkbox" />
          <h3>x{this.props.ItemAmount}</h3>
          <h3>{this.props.ItemTitle}</h3>
        </div>
        <div className="item-container">
          <input type="checkbox" />
          <h3>x{this.props.ItemAmount}</h3>
          <h3>{this.props.ItemTitle}</h3>
        </div>
      </div>
    )
  }
}
