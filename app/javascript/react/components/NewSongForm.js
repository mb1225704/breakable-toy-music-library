import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ErrorList from "./ErrorList";




const NewSongForm = (props) => {
  
  if (!props.user) {
    window.location.pathname = "/users/sign_in"
  }

  const [formSubmitted, setFormSubmitted] = useState(null)

  const [newSong, setNewSong] = useState({
    name: "",
    album_name: "",
  })

  const handleUpdate = (event) => {
    setNewSong({
      ...newSong,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const [errors, setErrors] = useState({})

  const validSubmission = () => {
    let submitErrors = {}
    if (newSong.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        name: "is blank"
      }
    }
    if (newSong.album_name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        album_name: "is blank"
      }
    }
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (validSubmission()) {
      await postUpdate(newSong)
      
    }
  }

  const postUpdate = async (formPayload) => {
    
    try {
      const response = await fetch(`/api/v1/songs`, {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(formPayload),
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
        setFormSubmitted(response)
        
      }
    } catch (err) {
      console.log(`Error! ${err}`)
    }
  }

  if (formSubmitted) {
    return <Redirect push to={`/songs`} />
  }

  return (
    <div className="form-card">
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Song Name</label>
        <input id="name" name="name" type="text" value={newSong.name} onChange={handleUpdate} />
        

        <label htmlFor="album_name">Album Name</label>
        <input id="album_name" name="album_name" type="text" value={newSong.album_name} onChange={handleUpdate} />
        
        <label htmlFor="artist_id">Artist Id</label>
        <input id="artist_id" name="artist_id" type="text" value={newSong.artist_id} onChange={handleUpdate} />

        <input type="submit" value="Add song" className="button"/>
      </form>
    </div>
  )
}

export default NewSongForm