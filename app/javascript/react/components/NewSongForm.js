import React, { useState, useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ErrorList from "./ErrorList";
import _ from 'lodash'
import { withRouter } from "react-router-dom"

const NewSongForm = (props) => {
    if (!props.user) {
    window.location.pathname = "/users/sign_in"
    }

    const [formSubmitted, setFormSubmitted] = useState(null)
    const [newSong, setNewSong] = useState({
    name: "",
    album_name: "",
    artist_id: "",
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
    if (song.name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        title: "is blank"
      }
    }
    if (song.album_name.trim() === "") {
      submitErrors = {
        ...submitErrors,
        score: "is blank"
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
      const response = await fetch(`/api/v1/songs/new/${props.match.params.id}`, {
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
        setFormSubmitted(props.match.params.id)
      }
    } catch (err) {
      console.log(`Error! ${err}`)
    }
  }

  if (formSubmitted) {
    return <Redirect push to={`/songs/${props.match.params.id}`} />
  }

  return (
    <div className="form-card">
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Song</label>
        <select name="name" id="name" onChange={handleUpdate}>
          <option value=""></option>
        </select>

        <label htmlFor="name">Song name</label>
        <input id="name" name="name" type="text" value={song.name} onChange={handleUpdate} />

        <label htmlFor="album_name">Album name</label>
        <input id="album_name" name="album_name" type="text" value={song.album_name} onChange={handleUpdate} />

        <input type="submit" value="Add Song" className="button"/>
      </form>
    </div>
  )
}

export default withRouter(NewSongForm)