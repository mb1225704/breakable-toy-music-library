import React, { useState, useEffect } from "react"
import { withRouter } from "react-router-dom"

const ShowContainer = (props) => {
    debugger
    const [song, setSong] = useState([])

    const fetchSong = async () => {
    try {
        const response = await fetch(`/api/v1/songs/${props.match.params.id}`)
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



    return (
        <div>
                <h2 className="large-offset-3">{`${song.name}(${song.album_name})`}</h2>
                <div className="show-body grid-x grid-margin-x">
            <div className="show-information cell large-5 small-12">
            </div>
        </div>
    </div>
        )
}

export default withRouter(ShowContainer)