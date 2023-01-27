import React from 'react'

type Props = {
    name: String,
    image: Object,
    pos: number
}

export default function ChampionCard({name, image}: Props) {
  return (
    <div>
        <img src={'http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/' + image.full} />
    </div>
  )
}