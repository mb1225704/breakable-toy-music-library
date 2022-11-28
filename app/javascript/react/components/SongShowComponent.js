import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import ShowSong from './SongShow'
import { Link } from "react-router-dom"

const SongShowPage = (props) => {
    
    const [songs, setSongs] = useState([])

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

    const showSongs = songs.map((song) =>{
        
        return (
            <ShowSong
            key = {song.id}
            song = {song.name}
            album_name = {song.album_name}
            artist_name = {song.artist.artist_name}
            />
        )
    })

    return(
        <div>{showSongs}</div>
    )
}


export default SongShowPage