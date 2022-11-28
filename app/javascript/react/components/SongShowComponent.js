import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ShowSong from './SongShow'
import ShowTechnique from './TechniqueTile'
import { Link } from "react-router-dom"
import { method } from 'lodash'

const SongShowPage = (props) => {
    
    const [songs, setSongs] = useState([])
    const [techniques, setTechniques] = useState([])

    const fetchSongs = async () => {
        try {
            const response = await fetch(`/api/v1/songs/${props.match.params.id}`)
            
            if(!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error (errorMessage)
                throw(error)
            } else {
                const parsedSongs = await response.json()
                
                setSongs([parsedSongs.song])
            }
            } catch(err) {
                console.error(`Error in Fetch: ${err.message}`)
            }
    }

    useEffect (() => {
        fetchSongs()
    }, [])

    //insert get request for techniques. map over techniques <showTechnique/>
    const fetchTechniques = async () => {
        try {
            const response = await fetch(`/api/v1/songs/${props.match.params.id}/techniques/${props.match.params.id}`)
            
            if(!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error (errorMessage)
                throw(error)
            } else {
                const responseBody = await response.json()
                setTechniques(responseBody)
            }
            } catch(err) {
                console.error(`Error in Fetch: ${err.message}`)
            }
    }

    useEffect (() => {
        fetchTechniques()
    }, [])

    const showSongs = songs.map((song) =>{
        
        return (
            <ShowSong
            key = {song.id}
            id = {song.id}
            song = {song.name}
            album_name = {song.album_name}
            artist_name = {song.artist.artist_name}
            techniques = {song.techniques}
            setTechniques = {setTechniques}
            />
        )
    })

    const showTechniques = techniques.map((technique) =>{
        
        return(
            <ShowTechnique
            key = {technique.id}
            id = {technique.id}
            technique_name = {technique.technique_name}
            />
        )
    })

    return(
        <div>{showSongs}
        {showTechniques}
        </div>
    )
}


export default SongShowPage