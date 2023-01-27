import React from 'react'
import selectChampions from '../helpers/selectChampion'
import ChampionCard from './ChampionCard'

type Props = {}

export default function GameScreen({}: Props) {

    const [championsData, setChampionsData] = React.useState<JSON>()

    const [gameChampions, setGameChampions] = React.useState<Array<Object>>()

    React.useEffect(() => {
        fetch('http://ddragon.leagueoflegends.com/cdn/12.21.1/data/pt_BR/champion.json?api_key=RGAPI-9b398f59-c8d8-4670-9d1c-a25b4d6ba39b')
            .then(resp => resp.json())
            .then(data => setChampionsData(data))
    }, [])

    React.useEffect(() => {

        selectChampions(championsData, setGameChampions)
        
    }, [championsData])

    function gameTable() {
      if(gameChampions){
        gameChampions?.map((c,index) => {
          return(
            <ChampionCard
            key={c.key}
            name={c.name}
            image={c.image}
            number={index}
            />
          )
        })
      } else {
        return <p>Aguarde um momento</p>
      }
      
    }

  return (
    <div className='col-start-1 col-end-8 row-start-1 row-end-5 bg-primary' onClick={() => {console.log(championsData)}}>
        {gameTable()}
    </div>
  )
}