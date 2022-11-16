import React, {useState, useEffect} from 'react'
import HomePage from './HomePage'
import SongPage from './SongPage'
import ShowContainer from './ShowContainer'

import { BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/songs/:id">
          {/* <ShowContainer user={currentUser}/> */}
        </Route>
        <Route exact path="/songs/new" >
          {/* <NewSongForm user={currentUser} /> */}
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
