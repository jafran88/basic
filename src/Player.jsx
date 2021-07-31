function Player(props) {

    const attackStrength = 100;
    
    return (
        <div>
            <h3>Player</h3>
            <label>HP: {props.hp} </label>
            <br />
            <button onClick={() => props.AttackEnemy(attackStrength)} >Attack</button>
            
        </div>
    )
}

export default Player
