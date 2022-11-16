import React from 'react'
import SongPage from './SongPage'
import { BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom'

export const HomePage = (props) => {
    return (
            <body className='home-body'>
                <h1 className='home-header'>Welcome to the best place to improve your guitar skills</h1>
                <div id="home-image">
                </div>
            </body>
        
    )
}

export default HomePage