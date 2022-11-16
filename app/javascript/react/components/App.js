import React, {useState, useEffect} from 'react'
import HomePage from './HomePage'
import SongPage from './SongPage'

import { BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/songs" component={SongPage}>
          <SongPage/>
        </Route>
        {/* <Route exact path="/song/:id/new" >
          <NewSongForm user={currentUser} />
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App
