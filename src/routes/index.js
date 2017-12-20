import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Start from '../Pages/Start'
import Sweden from '../Pages/Sweden'
import France from '../Pages/France'
import Germany from '../Pages/Germany'
import Greece from '../Pages/Greece'
import Spain from '../Pages/Spain'

export default () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/sweden" exact component={Sweden} />
        <Route path="/france" exact component={France} />
        <Route path="/germany" exact component={Germany} />
        <Route path="/greece" exact component={Greece} />
        <Route path="/spain" exact component={Spain} />
      </Switch>
    </BrowserRouter>
  </div>
)
