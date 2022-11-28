import React, {useState, useEffect} from 'react'
import IndexSongTiles from './IndexSongTileComponent'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom"

const IndexPage = (props) => {
    const [songs, setSongs] = useState([])

    const fetchSongs = async () => {
        try {
            const response = await fetch(`/api/v1/songs`)

            if(!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error (errorMessage)
                throw(error)
            } else {
                const parsedSongs = await response.json()
                setSongs(parsedSongs.songs)
            }
            } catch(err) {
                console.error(`Error in Fetch: ${err.message}`)
            }
    }

    useEffect (() => {
        fetchSongs()
        
    }, [])
    const IndexSongMap = songs.map((song) => {
        
    return (
        <IndexSongTiles
            key={song.id}
            id={song.id}
            name={song.name}
            album={song.album_name}
            artist={song.artist.artist_name}
        />
    )
})

  return (
    <div>
        <SearchBar
      song = {songs}
      setSongs = {setSongs}
      />
      <Link className="button" to={`/songs/new`}>Add A Song</Link>
      <h2>All Songs</h2>
      <div>
      {IndexSongMap}
      </div>
    </div>
  )
}

export default IndexPage