import { useState } from 'react'
import './App.css'
import GameStartBtn from './components/GameStartBtn';
import RestartBtn from './components/RestartBtn';

function App() {

  const [gameState, setGameState] = useState("loaded");

  function GameStart() {
    if (gameState == "started") {
      return (
        <h1>Game Started</h1>
      )
    } else {
      return 
    }
  }

  // game start btn
  function handleGameStartBtn() {
    setGameState("started");
  }

  // restart
  function handleGameRestart() {
    setGameState("loaded");
  }
  
  return (
    <div className="appContainer">
      <h1>hello</h1>
      <GameStart />
      <GameStartBtn onStart={handleGameStartBtn}/>
      <RestartBtn onRestart={handleGameRestart} />
    </div>
      
  )
}

export default App
