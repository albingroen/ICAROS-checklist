import React from 'react'
import { Header } from '../Comps/Header'
import { ChecklistItem } from '../Comps/ChecklistItem'

export default class Sweden extends React.Component {
  render() {
    const item1 = 'Circut board'
    const item2 = 'Star screws'
    const item3 = '100v batteries'
    const item4 = 'Electric tape'
    const item5 = 'Computer with baseflight'
    const item6 = 'Power cables'
    return (
      <div>
        <Header country="Sweden" />
        <div className="checklist-wrapper">
          <ChecklistItem ItemTitle={item1} ItemAmount="16" />
          <ChecklistItem ItemTitle={item2} ItemAmount="16" />
          <ChecklistItem ItemTitle={item3} ItemAmount="16" />
          <ChecklistItem ItemTitle={item4} ItemAmount="16" />
          <ChecklistItem ItemTitle={item5} ItemAmount="16" />
          <ChecklistItem ItemTitle={item6} ItemAmount="16" />
        </div>
      </div>
    )
  }
}
