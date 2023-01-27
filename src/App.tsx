import './styles/global.css'
import { useState } from 'react'
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'

//export const AppContext:any = React.createContext<AppContextType | null>(null)

function App() {

const [gameStarted, setGameStarted] = useState<boolean>(true)

  return (
    <div className="w-screen h-screen bg-[url('../lol-background.webp')] bg-cover flex items-center justify-center">
      <div className='w-4/5 h-5/6 bg-backGround/[0.95] p-4 rounded-3xl border-4 border-contourText grid grid-rows-5 grid-cols-7'>
        {gameStarted ? <GameScreen /> : <StartScreen gameStarted={gameStarted} setGameStarted={setGameStarted} /> }
      </div>
    </div>
  )
}

export default App
