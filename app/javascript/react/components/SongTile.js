import React, { useState, useEffect } from "react";
import _, { differenceBy } from 'lodash'


const SongTile = (props) => {
debugger
    return (
        <div>
            {props.params.name}
            {props.params.album_name}
            {props.params.artist_name}
        </div>
    )
}

export default SongTile