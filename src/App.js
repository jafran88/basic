import {useState} from 'react'
import Player from './Player'
import Enemy from './Enemy'

function App(){

    const [playerHp,setPlayerHP] = useState(100);
    const [enemyHp,setEnemyHP] = useState(1000);

    const AttackEnemy = (attackStrength) => {
    setEnemyHP(enemyHp-attackStrength)
    if(enemyHp <= 0)
    {
      setEnemyHP(0);
    }
  }

    return (
      <>
      <Player hp = {playerHp}  AttackEnemy = {AttackEnemy}/>
      <Enemy hp = {enemyHp} />
      </>
    );
}

export default App;