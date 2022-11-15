import React from 'react'
import HomePage from './HomePage'

import { BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
