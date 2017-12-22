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

    const itemAmount1 = '16'
    const itemAmount1 = '16'
    const itemAmount1 = '16'
    const itemAmount1 = '16'
    const itemAmount1 = '16'
    const itemAmount1 = '16'
    return (
      <div>
        <Header country="Sweden" />
        <div className="checklist-wrapper">
          <ChecklistItem ItemTitle={item1} ItemAmount={itemAmount1} />
          <ChecklistItem ItemTitle={item2} ItemAmount={itemAmount2} />
          <ChecklistItem ItemTitle={item3} ItemAmount={itemAmount3} />
          <ChecklistItem ItemTitle={item4} ItemAmount={itemAmount4} />
          <ChecklistItem ItemTitle={item5} ItemAmount={itemAmount5} />
          <ChecklistItem ItemTitle={item6} ItemAmount={itemAmount6} />
        </div>
      </div>
    )
  }
}
