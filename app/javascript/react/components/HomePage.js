import React from 'react'

import { Link, BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom'

export const HomePage = (props) => {
    return (
            <body className='home-body'>
                <div>
                <Link className="button" to={`/songs`}>Song Library</Link>
                <Link className="button" to={`/songs/new`}>Add A Song</Link>
                <h1 className='home-header'>Welcome to the best place to improve your guitar skills</h1>
                <div id="home-image">
                </div>
                </div>
            </body>
        
    )
}

export default HomePage