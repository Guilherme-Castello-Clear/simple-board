import React from 'react'
import player from '../controller/player'

export default props => {
    return(
        <button style={player.styled} onClick={() => {player.move(props.direction, props.step)}}>{props.direction}</button>
    )
}