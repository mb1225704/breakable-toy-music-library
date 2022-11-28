import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import ErrorList from "./ErrorList";
import _ from 'lodash'

const NewTechniqueForm = (props) => {

  const [newTechnique, setNewTechnique] = useState({
    technique_name: "",
  })
  
  const handleUpdate = (event) => {
    setNewTechnique({
      ...newTechnique,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  // const [errors, setErrors] = useState({})

  // const validSubmission = () => {
  //   let submitErrors = {}
  //   if (setNewTechnique.trim() === "") {
  //     submitErrors = {
  //       ...submitErrors,
  //       title: "is blank"
  //     }
  //   }
  //   setErrors(submitErrors)
  //   return _.isEmpty(submitErrors)
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // if (validSubmission()) {
      setNewTechnique(newTechnique)
    //}
  }



  const postUpdate = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(`/api/v1/songs/${props.song_id}/techniques`, { 
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(newTechnique),
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
        const responseBody = await response.json()
        
        props.setTechniques([responseBody])
        setNewTechnique({
          technique_name: ""
        })
      }
    } catch (err) {
      console.log(`Error! ${err}`)
    }
  }

  const handleClick = () => {
    postUpdate(newTechnique)
  }

  return (
    <div className="form-card">
      {/* <ErrorList errors={errors} /> */}
      {/* <li onClick={handleClick}>Add</li> */}
      <form onSubmit={postUpdate}>

        <label htmlFor="technique_name">Technique Name</label>
        <input id="technique_name" name="technique_name" type="text" value={newTechnique.technique_name} onChange={handleUpdate} />


        <input type="submit" value="Add Technique" className="button"/>
      </form>
    </div>
  )
}

export default NewTechniqueForm