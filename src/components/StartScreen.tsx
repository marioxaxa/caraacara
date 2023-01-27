import React from 'react'

type Props = {
  gameStarted:boolean,
  setGameStarted:React.Dispatch<React.SetStateAction<boolean>>
}

export default function StartScreen({gameStarted, setGameStarted}: Props) {
  return (
    <div>StartScreen</div>
  )
}