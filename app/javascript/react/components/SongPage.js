import React, { useState, useEffect } from 'react'
import HomePage from './HomePage'
import { BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom'
import SongTile from './SongTile'

const SongPage = (props) => {
    const [song, setSong] = useState([])

    const fetchSong = async () => {
        try {
            const response = await fetch(`/api/v1/songs`)
            if (!response.ok) {
                const errorMessage = `${response.status} ${response.statusText}`
                const error = new Error(errorMessage)
            throw (error)
            } else {
                const parsedSong = await response.json()
            
                setSong(parsedSong)
                
                }
            } catch (err) {
            console.log(`Error! - ${err}`)
            }
    }

    useEffect(() => {
        fetchSong()
    }, [])
    const track = song.map((params) => {
        return (
            <SongTile
            key = {params.id}
            params = {params}
            />
        )
    })
return (
        <h1 className="large-offset-3">
            {track}
        </h1>
    )
}

export default SongPage