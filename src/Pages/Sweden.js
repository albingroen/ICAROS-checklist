import React from 'react'
import { Header } from '../Comps/Header'
import { ChecklistItem } from '../Comps/ChecklistItem'

export default class Sweden extends React.Component {
  render() {
    return (
      <div>
        <Header country="Sweden" />
        <div className="checklist-wrapper">
          <ChecklistItem ItemTitle="Circut boards" ItemAmount="16" />
          <ChecklistItem ItemTitle="Circut boards" ItemAmount="16" />
        </div>
      </div>
    )
  }
}
