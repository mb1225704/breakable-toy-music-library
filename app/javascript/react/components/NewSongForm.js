import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ErrorList from "./ErrorList";
import SpotifyTiles from "./SpotifyTile";




const NewSongForm = (props) => {
  
  
  if (!props.user) {
    window.location.pathname = "/users/sign_in"
  }

  // const [formSubmitted, setFormSubmitted] = useState(null)

  // this tracks what the user types 
  const [newSong, setNewSong] = useState("")

  // this holds the results from Spotify
  const [spotifySongs, setSpotifySongs] = useState([])


  // const[postSong, setPostSong] = useState([])

  const getSong = async () => {
    // debugger
    try {
      const response = await fetch(`/api/v1/songs/spotify_search?song_name=${newSong}`)
      if (!response.ok) {
        const errorMessage = `${response.status} - ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      } else {
        const responseData = await response.json()
        // debugger
        // an array of songs results
        // set in state
        // map over to display options
        setSpotifySongs(responseData)
        // setFormSubmitted(responseData)
        
      }
    } catch (err) {
      console.log(`Error! ${err}`)
    }
  }

  const handleUpdate = (event) => {
    setNewSong(event.currentTarget.value)
  }

  console.log(newSong)
  console.log(spotifySongs)

  const [errors, setErrors] = useState({})

  // const validSubmission = () => {
  //   let submitErrors = {}
  //   if (newSong.name.trim() === "") {
  //     submitErrors = {
  //       ...submitErrors,
  //       name: "is blank"
  //     }
  //   }
  //   setErrors(submitErrors)
  //   return _.isEmpty(submitErrors)
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // if (validSubmission()) {
      await getSong(newSong)
      
    // }
  }

  const handlePost = async (event) => {
    event.preventDefault()
    if (validSubmission()) {
      await postSpotify(newSong)
      
    }
  }

  //would have to create a post request with the formpayload info

  const postSpotify = async (spotifyData) => {
    try {
      const response = await fetch(`/api/v1/songs`, {
      // const response = await fetch(`/api/v1/songs/spotify_search?song_name=${formPayload}`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(spotifyData),
        headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
        }
      })
      if (!response.ok) {
        const errorMessage = `${response.status} - ${response.statusText}`
        const error = new Error(errorMessage)
        throw (error)
      } else {
        const spotifypost = await response.json()
        // redirect to the song show page for the song that was clicked (in the response)
        // use the Redirect component from React Router
      }
    } catch (err) {
      console.log(`Error! ${err}`)
    }
  }


  const tiles = spotifySongs.map((song) => {

    const handleClick = () => {
      postSpotify(song)
    }
    return (
      <li onClick={handleClick}>{song.name}</li>,

      <SpotifyTiles
        key = {song.id}
        name = {song.name}
        handleClick = {handleClick}
        />
    )
  } 
  )


  // if (formSubmitted) {
  //   return <Redirect push to={`/songs`} />
  // }

  return (
    <div className="form-card">

      

      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit} >

        <label htmlFor="name">Song Name</label>
        <input id="name" name="name" type="text" value={newSong.name} onChange={handleUpdate} />

        <input type="submit" value="Search Song" className="button"/>
      </form>

      {tiles}
    </div>
  )
}

export default NewSongForm