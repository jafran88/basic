import React from 'react'

function Enemy(props) {
    return (
        <div>
            <h3>Enemy</h3>
            <label>HP: {props.hp} </label>
            <br />
        </div>
    )
}

export default Enemy
