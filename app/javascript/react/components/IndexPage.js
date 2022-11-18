import React, {useState, useEffect} from 'react'
import IndexSongTiles from './IndexSongTileComponent'
import SearchBar from './SearchBar'

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
        
        
        // song.artist?.name
        // undefined method `.name` for nil class
    return (
        <IndexSongTiles
            key={song.id}
            name={song.name}
            album={song.album_name}
            artist={song.artist.artist_name}
        />
    )
})

  return (
    <div>
      <h2>All Songs</h2>
      <div>
      {IndexSongMap}
      </div>
      <SearchBar
      song = {songs}
      setSongs = {setSongs}
      />
    </div>
  )
}

export default IndexPage