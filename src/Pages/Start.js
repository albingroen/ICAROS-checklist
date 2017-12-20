import React, { Component } from 'react'
import '../Styles/Start.css'
import { Startbutton } from '../Comps/startbutton'

export default class Start extends Component {
  render() {
    const title = 'Choose country'
    return (
      <div className="container">
        <h1>{title}</h1>
        <Startbutton text="Sweden" path="/sweden" />
        <Startbutton text="France" path="/france" />
        <Startbutton text="Spain" path="/spain" />
        <Startbutton text="Greece" path="/greece" />
        <Startbutton text="Germany" path="/germany" />
      </div>
    )
  }
}
