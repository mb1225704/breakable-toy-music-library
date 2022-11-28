import React, {useState, useEffect} from 'react'
import HomePage from './HomePage'
import IndexPage from './IndexPage'
import NewSongForm from './NewSongForm'
import SongShowPage from './SongShowComponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export const App = (props) => {
  // fetch to backend for the current user
  // state for the user - default state to be `undefined`
  // user in 3 different ways
  // undefined = no user has been attempted to be fetched
  // null = no user is signed in
  // user data = there is a current user
  const [user, setUser] = useState({})

  const getUser = async () => {
    try {
      const response = await fetch('/api/v1/current-user')
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      } else {
        const parsedUser = await response.json()
        setUser(parsedUser)
      }
    } catch (err) {
      console.log(`Error! - ${err}`)
    }
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/songs" component={IndexPage}/>


        <Route exact path="/songs/new">
          <NewSongForm user={user} component={NewSongForm}/>
        </Route> 
        <Route exact path="/songs/:id" component={SongShowPage}>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
