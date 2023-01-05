import React from 'react'
import "./Card.css"
import CardImage from './CardImage/CardImage'
import CardInfo from './CardInfo/CardInfo'
import CardTitle from './CardTitle/CardTitle'

function Card({title,image,info,onClick}) {
  return (
    <div className='Card' onClick={onClick}>
      <div className='card-body' > 
      <CardTitle title={title}/>
      <CardImage image={image}/>
      <CardInfo info={info}/>
      </div>
    </div>
  )
}

export default Card;

